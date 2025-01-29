#!/usr/bin/env bash

set -e
set -o pipefail

state="$(hyprctl -j clients)"
active_window="$(hyprctl -j activewindow)"

current_addr="$(echo "$active_window" | gojq -r '.address')"

window="$(echo "$state" |
  gojq -r '.[] | select(.monitor != -1 ) | "\(.address)    \(.workspace.name)    \(.title)"' |
  sed "s|$current_addr|focused ->|" |
  sort -r |
  wmenu -l 10 -i -p 'window')"

addr="$(echo "$window" | awk '{print $1}')"
ws="$(echo "$window" | awk '{print $2}')"

if [[ "$addr" =~ focused* ]]; then
  # already focused, exiting
  exit 0
fi

fullscreen_on_same_ws="$(echo "$state" | gojq -r ".[] | select(.fullscreen > 0) | select(.workspace.name == \"$ws\") | .address")"

if [[ "$window" != "" ]]; then
  hyprctl dispatch focuswindow address:${addr}
fi
