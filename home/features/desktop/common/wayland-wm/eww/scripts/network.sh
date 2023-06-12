icons=("󰣾" "󰣴" "󰣶" "󰣸" "󰣺")
disconnected_icon="󰣽"
connecting_icon="󱤚"

while true; do
  state=$(nmcli -t -f STATE g | tail -n 1)
  signal=$(nmcli -f in-use,signal dev wifi | rg "\*" | awk '{ print $2 }')
  essid=$(nmcli -t -f NAME connection show --active | head -n1 | sed 's/\"/\\"/g')

  if [ "$state" = "connected" ]; then
    level=$(awk -v n="$signal" 'BEGIN{print int((n-1)/20)}')
    if [ "$level" -gt 4 ]; then
      level=4
    fi
    icon=${icons[$level]}
  elif [ "$state" = "connecting" ]; then
    icon=$connecting_icon
    signal=0
  else
    icon=$disconnected_icon
    signal=0
  fi

  echo '{ "essid": "'"$essid"'", "icon": "'"$icon"'", "signal": "'"$signal"'" }'

  sleep 3
done
