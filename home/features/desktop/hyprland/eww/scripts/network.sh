wifi_icons=("󰤯" "󰤟" "󰤢" "󰤥" "󰤨")
ethernet_icon="󰈀"
other_icon="󰛵"
connecting_icon="󰲝"
disconnected_icon="󰲛"

filter_state() {
  if rg -q ":connected$" <<< "$1"; then
    echo 'connected'
  elif rg -q ":connecting$" <<< "$1"; then
    echo 'connecting'
  elif rg -q -v "disconnected" <<< "$1"; then
    rg -v "disconnected" <<< "$1" | head -n 1 | awk -F ":" '{print $2}'
  else
    echo 'disconnected'
  fi
}

while true; do
  global_state=$(nmcli -t -f STATE g | tail -n 1)
  states=$(nmcli -t -f TYPE,STATE d)
  ethernet_state=$(filter_state "$(rg '^ethernet:' <<< "$states")")
  wifi_state=$(filter_state "$(rg '^wifi:' <<< "$states")")
  connection_name=$(nmcli -t -f NAME connection show --active | head -n1 | sed 's/\"/\\"/g')
  wifi_signal=0

  if [ "$global_state" = "connected" ]; then
    if [ $ethernet_state = "connected" ]; then
      icon=$ethernet_icon
    elif [ $wifi_state = "connected" ]; then
      wifi_signal=$(nmcli -f in-use,signal dev wifi | rg "\*" | awk '{ print $2 }')
      level=$(awk -v n="$wifi_signal" 'BEGIN{print int((n-1)/20)}')
      if [ "$level" -gt 4 ]; then
        level=4
      fi
      icon=${wifi_icons[$level]}
    else
      icon=$other_icon
    fi
  elif [ "$global_state" = "connecting" ]; then
    icon=$connecting_icon
  else
    icon=$disconnected_icon
  fi

  echo '{ "connection_name": "'"$connection_name"'", "icon": "'"$icon"'", "wifi_signal": '"$wifi_signal"' }'

  sleep 3
done
