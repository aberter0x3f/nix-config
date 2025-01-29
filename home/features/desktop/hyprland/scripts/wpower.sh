#!/usr/bin/env bash

options="cancel\nquit\npoweroff\nreboot"

choice=$(printf "$options" | wmenu -p "power")

case "$choice" in
  cancel)
    ;;
  quit)
    hyprctl dispatch exit
    ;;
  poweroff)
    poweroff
    ;;
  reboot)
    reboot
    ;;
  *)
    ;;
esac
