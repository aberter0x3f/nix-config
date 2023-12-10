vol_icon=("󰕿" "󰖀" "󰕾")
muted_icon="󰖁"
mic_icon=("󰍬" "󰍬" "󰍬")
mic_muted_icon="󰍭"
XDG_CACHE_HOME="$HOME/.cache"
date="$XDG_CACHE_HOME/eww/osd_vol.date"
lock=0

showhide() {
  # get dates
  rundate=$(cat "$date")
  currentdate=$(date +%s)

  # handle showing
  if [ "$rundate" = "$currentdate" ] && [ "$lock" -eq 0 ]; then
    eww open osd
    eww update osd_vol=true
    lock=1
  elif [ "$((currentdate - rundate))" = "2" ] && [ "$lock" -eq 1 ]; then
    eww update osd_vol=false
    if [ "$(eww get osd_vol)" = "false" ] && [ "$(eww get osd_bright)" = "false" ]; then
      dummy=$(eww close osd)
    fi
    lock=0
  fi
}

osd() {
  if [ ! -f "$date" ]; then
    mkdir -p "$XDG_CACHE_HOME/eww"
  fi
  date +%s >"$date"
  showhide
}

osd_handler() {
  lock=0
  rundate=0
  if [ ! -f "$date" ]; then
    mkdir -p "$XDG_CACHE_HOME/eww"
    echo 0 >"$date"
  fi

  while true; do
    showhide
    sleep 0.1
  done

  dummy=$(eww close osd)
}

vol() {
  wpctl get-volume @DEFAULT_AUDIO_"$1"@ | awk '{print int($2*100)}'
}
ismuted() {
  wpctl get-volume @DEFAULT_AUDIO_"$1"@ | rg -i muted -c
}
setvol() {
  wpctl set-volume @DEFAULT_AUDIO_"$1"@ "$(awk -v n="$2" 'BEGIN{print (n / 100)}')"
}
setmute() {
  wpctl set-mute @DEFAULT_AUDIO_"$1"@ toggle
}

event() {
  sinkmuted=$(ismuted "SINK")
  sourcemuted=$(ismuted "SOURCE")

  if [ -z "$sinkmuted" ]; then
    lvl=$(awk -v n="$(vol "SINK")" 'BEGIN{{max=2}{if(int(n/34)<max) max=int(n/34)}{print max}}')
    sink_icon="${vol_icon[$lvl]}"
  else
    sink_icon=$muted_icon
  fi

  if [ -z "$sourcemuted" ]; then
    lvl=$(awk -v n="$(vol "SOURCE")" 'BEGIN{{max=2}{if(int(n/34)<max) max=int(n/34)}{print max}}')
    source_icon="${mic_icon[$lvl]}"
  else
    source_icon=$mic_muted_icon
  fi
}

generate() {
  echo '{"sink_icon":"'"$sink_icon"'","source_icon":"'"$source_icon"'","shik_percent":"'"$(vol "SINK")"'","source_percent":"'"$(vol "SOURCE")"'"}'
}

if [ "$1" = "mute" ]; then
  if [ "$2" != "SOURCE" ] && [ "$2" != "SINK" ]; then
    echo "Can only mute SINK or SOURCE"
    exit 1
  fi
  setmute "$2"
elif [ "$1" = "setvol" ]; then
  if [ "$2" != "SOURCE" ] && [ "$2" != "SINK" ]; then
    echo "Can only set volume for SINK or SOURCE"
    exit 1
  elif [ "$3" -lt 1 ] || [ "$3" -gt 100 ]; then
    echo "Volume must be between 1 and 100"
    exit 1
  fi
  setvol "$2" "$3"
elif [ "$1" = "osd" ]; then
  osd
else
  event
  generate

  osd_handler &
  # event loop
  pactl subscribe | rg --line-buffered "'change'" | while read -r _; do
    event
    generate
  done
fi


