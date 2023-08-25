discharging_icons=("󰂎" "󰁺" "󰁻" "󰁼" "󰁽" "󰁾" "󰁿" "󰂀" "󰂁" "󰂂" "󰁹")
charging_icons=("󰢟" "󰢜" "󰂆" "󰂇" "󰂈" "󰢝" "󰂉" "󰢞" "󰂊" "󰂋" "󰂅")
no_battery_icon="󱉝"

# get amount of batteries in the device
get_battery_number() {
  battery_number=$(acpi -b | wc -l)
  echo $battery_number
}

get_battery_combined_percent() {
  total_charge=$(expr $(acpi -b | grep -Eo "[0-9]+%" | grep -Eo "[0-9]+" | paste -sd+ | bc))
  battery_number=$(get_battery_number)
  percent=$(expr $total_charge / $battery_number)
  echo $percent
}

get_battery_charging_status() {
  if $(acpi -b | grep --quiet Discharging); then
    echo "discharging"
  else
    # acpi can give Unknown or Charging if charging, https://unix.stackexchange.com/questions/203741/lenovo-t440s-battery-status-unknown-but-charging
    echo "charging"
  fi
}

if [ $(get_battery_number) -eq 0 ]; then
  percent=-1
  icon=$no_battery_icon
else
  percent=$(get_battery_combined_percent)
  lvl=$(awk -v n="$percent" 'BEGIN{{max=10}{if(int(n/10)<max) max=int(n/10)}{print max}}')
  if [ $(get_battery_charging_status) = "charging" ]; then
    icon="${charging_icons[$lvl]}"
  else
    icon="${discharging_icons[$lvl]}"
  fi
fi
echo '{"icon": "'"$icon"'", "percent": '"$percent"'}'
