active="active"     # Active Workspaces
inactive="inactive" # Inactive workspaces
empty='empty'       # Empty workspaces

declare -A workspaces

add_workspaces() {
  while read -r k v; do workspaces[$k]="$v"; done < <(niri msg -j workspaces | gojq -r '.[]|"\(.id) \(if .active_window_id == null then 0 else 1 end)"')
}

update_focusedws() {
  focusedws=$(niri msg -j workspaces | gojq -r '.[] | select(.is_focused == true) | .idx')
}

update_focusedws

status() {
  if [ $focusedws -eq "$1" ]; then
    echo -n "$active"
  elif [ "${workspaces[$1]}" -eq 1 ]; then
    echo -n "$inactive"
  else
    echo -n "$empty"
  fi
}

# handle workspace create/destroy
workspace_event() {
  workspaces=()
  add_workspaces
  update_focusedws
}

# generate the json for eww
generate() {
  echo -n '['
  first=0

  for i in {1..9}; do
    current_status=$(status $i)
    if [ "$current_status" != "$empty" ]; then
      if [ "$first" -eq 0 ]; then
        first=1
      else
        echo -n ','
      fi
      echo -n '{"index":"'$i'","status":"'$(status "$i")'"}'
    fi
  done

  echo ']'
}

# setup

add_workspaces

# generate initial widget
generate

niri msg -j event-stream | while read -r line; do
  # Check if the event is WorkspaceActivated or WorkspacesChanged using gojq
  if echo "$line" | gojq -e 'has("WorkspaceActivated") or has("WorkspacesChanged") or has("WindowsChanged") or has("WindowOpenedOrChanged") or has("WindowClosed")' > /dev/null; then
    workspace_event
    generate
  fi
done
