#!/usr/bin/env bash

options="cancel\nquit\npoweroff\nreboot"

choice=$(printf "$options" | wmenu -p "power")

case "$choice" in
  cancel)
    ;;
  quit)
    niri msg action quit
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
