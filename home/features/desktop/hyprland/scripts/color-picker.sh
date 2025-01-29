#!/usr/bin/env bash
# wayland color picker
# select a single 1x1 pixel with slurp, use grim to take a screenshot on it
# and pipe to imagemagick to parse color
# @depends slurp grim imagemagick libnotify
# @bug WLR_NO_HARDWARE_CURSORS=1 cause grim's output image having wrong color
# for single pixel

if [ "$WLR_NO_HARDWARE_CURSORS" = "1" ]; then
  msg="grim conflicts with: WLR_NO_HARDWARE_CURSORS=1"
  echo "$msg"
  notify-send -u critical "$(basename $0)" "$msg"
  exit 1
fi

grim -g "$(slurp -p)" -t ppm - | magick - -format '%[pixel:p{0,0}]' txt:- | grep -v '^#' | cut -d' ' -f4- | xargs -I {} notify-send -u low "Color picker" "{}"
