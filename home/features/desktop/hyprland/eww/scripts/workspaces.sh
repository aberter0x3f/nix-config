active="active"     # Active Workspaces
inactive="inactive" # Inactive workspaces
empty='empty'       # Empty workspaces

# get initial focused workspace
focusedws=$(hyprctl -j monitors | jq -r '.[] | select(.focused == true) | .activeWorkspace.id')

declare -A o=([1]=0 [2]=0 [3]=0 [4]=0 [5]=0 [6]=0 [7]=0 [8]=0 [9]=0)
declare -A workspaces

# set color for each workspace
status() {
  if [ "${o[$1]}" -eq 1 ]; then
    if [ $focusedws -eq "$1" ]; then
      echo -n "${active}"
    else
      echo -n "${inactive}"
    fi
  else
    echo -n "$empty"
  fi
}

# handle workspace create/destroy
workspace_event() {
  o=([1]=0 [2]=0 [3]=0 [4]=0 [5]=0 [6]=0 [7]=0 [8]=0 [9]=0)
  workspaces=()
  # add workspaces
  while read -r k v; do workspaces[$k]="$v"; done < <(hyprctl -j workspaces | jq -r '.[]|"\(.id) \(.monitor)"')
  # check occupied workspaces
  for num in "${!workspaces[@]}"; do
    o[$num]=1
  done

  focusedws=$(hyprctl -j monitors | jq -r '.[] | select(.focused == true) | .activeWorkspace.id')
}

# generate the json for eww
generate() {
  echo -n '['

  for i in {1..9}; do
    echo -n ''$([ $i -eq 1 ] || echo ,)'{"index":"'$i'","status":"'$(status "$i")'"}'
  done

  echo ']'
}

# setup

# add workspaces
while read -r k v; do workspaces[$k]="$v"; done < <(hyprctl -j workspaces | jq -r '.[]|"\(.id) \(.monitor)"')

# check occupied workspaces
for num in "${!workspaces[@]}"; do
  o[$num]=1
done
# generate initial widget
generate

socat -u UNIX-CONNECT:$XDG_RUNTIME_DIR/hypr/$HYPRLAND_INSTANCE_SIGNATURE/.socket2.sock - | while read -r line; do
  # echo "${#workspaces[@]} ${#o[@]}"
  # echo $line
  case ${line%>>*} in
  "focusedmon")
    focusedws=${line#*,}
    generate
    ;;
  "workspace")
    workspace_event
    generate
    ;;
  "createworkspace")
    workspace_event
    generate
    ;;
  "movewindow")
    generate
    ;;
  "destroyworkspace")
    workspace_event
    generate
    ;;
  "monitor"*)
    monitor_event
    generate
    ;;
  esac
  # echo $line
  # generate
done
