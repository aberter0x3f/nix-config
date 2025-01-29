#!/usr/bin/env bash

cliphist list | wmenu -p "clip" -l 10 | cliphist decode | wl-copy
