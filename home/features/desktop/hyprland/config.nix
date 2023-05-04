{ colorscheme, wallpaper, home }:

let
  inherit (home.sessionVariables) TERMINAL;
in
''
  # See https://wiki.hyprland.org/Configuring/Keywords/ for more

  # Source a file (multi-file configs)
  # source = ~/.config/hypr/myColors.conf

  # Some default env vars.
  env = GDK_SCALE,2
  env = XCURSOR_SIZE,32
  env = XCURSOR_THEME,"Bibata-Modern-Ice"

  # For all categories, see https://wiki.hyprland.org/Configuring/Variables/
  input {
    kb_layout = us
    kb_variant =
    kb_model =
    kb_options = ctrl:nocaps
    kb_rules =
    repeat_rate = 25
    repeat_delay = 300
    numlock_by_default = 1

    follow_mouse = 1

    touchpad {
      disable_while_typing = 0
      natural_scroll = 0
      clickfinger_behavior = 1
      middle_button_emulation = 1
      tap-to-click = 1
      drag_lock = 1
    }

    sensitivity = 0 # -1.0 - 1.0, 0 means no modification.
  }

  general {
    # See https://wiki.hyprland.org/Configuring/Variables/ for more

    gaps_in = 5
    gaps_out = 5
    border_size = 2
    col.active_border = 0xff${colorscheme.colors.base0D}
    col.inactive_border = 0xff${colorscheme.colors.base02}
    col.group_border_active = 0xff${colorscheme.colors.base0B}
    col.group_border = 0xff${colorscheme.colors.base04}

    layout = master
  }

  decoration {
    # See https://wiki.hyprland.org/Configuring/Variables/ for more

    rounding = 10
    blur = yes
    blur_size = 3
    blur_passes = 1
    blur_new_optimizations = on

    drop_shadow = yes
    shadow_range = 4
    shadow_render_power = 3
    col.shadow = 0x44000000
    col.shadow_inactive = 0x66000000
  }

  animations {
    enabled = true

    # Some default animations, see https://wiki.hyprland.org/Configuring/Animations/ for more

    bezier = easein, 0.11, 0, 0.5, 0
    bezier = easeout, 0.5, 1, 0.89, 1
    bezier = easeinout, 0.45, 0, 0.55, 1

    animation = windowsIn, 1, 1, easeout, slide
    animation = windowsOut, 1, 1, easein, slide
    animation = windowsMove, 1, 1, easeout

    animation = fadeIn, 1, 1, easeout
    animation = fadeOut, 1, 1, easein
    animation = fadeSwitch, 1, 1, easeout
    animation = fadeShadow, 1, 1, easeout
    animation = fadeDim, 1, 1, easeout
    animation = border, 1, 1, easeout

    animation = workspaces, 1, 1, easeout, slide
  }

  dwindle {
    # See https://wiki.hyprland.org/Configuring/Dwindle-Layout/ for more
    pseudotile = yes # master switch for pseudotiling. Enabling is bound to mainMod + P in the keybinds section below
    preserve_split = yes # you probably want this
  }

  master {
    # See https://wiki.hyprland.org/Configuring/Master-Layout/ for more
    new_is_master = true
    no_gaps_when_only = true
    inherit_fullscreen = true
  }

  gestures {
    # See https://wiki.hyprland.org/Configuring/Variables/ for more
    workspace_swipe = off
  }

  # Example per-device config
  # See https://wiki.hyprland.org/Configuring/Keywords/#executing for more
  device:epic mouse V1 {
    sensitivity = -0.5
  }

  # Example windowrule v1
  # windowrule = float, ^(kitty)$
  # Example windowrule v2
  # windowrulev2 = float,class:^(kitty)$,title:^(kitty)$
  # See https://wiki.hyprland.org/Configuring/Window-Rules/ for more


  # See https://wiki.hyprland.org/Configuring/Keywords/ for more
  $mainMod = SUPER
  $term = ${TERMINAL}

  # Example binds, see https://wiki.hyprland.org/Configuring/Binds/ for more
  bind = $mainMod, Return, exec, $term
  bind = $mainMod, Q, killactive,
  bind = $mainMod, F, fullscreen
  bind = $mainMod SHIFT, Q, exit,
  bind = $mainMod SHIFT, F, togglefloating,
  bind = $mainMod, D, exec, wofi --show drun
  bind = $mainMod, M, layoutmsg, swapwithmaster master

  # Move focus with mainMod + HJKL
  bind = $mainMod, K, layoutmsg, cycleprev
  bind = $mainMod, J, layoutmsg, cyclenext
  bind = $mainMod, H, splitratio, -0.1
  bind = $mainMod, L, splitratio, +0.1

  # Switch workspaces with mainMod + [0-9]
  bind = $mainMod, 1, workspace, 1
  bind = $mainMod, 2, workspace, 2
  bind = $mainMod, 3, workspace, 3
  bind = $mainMod, 4, workspace, 4
  bind = $mainMod, 5, workspace, 5
  bind = $mainMod, 6, workspace, 6
  bind = $mainMod, 7, workspace, 7
  bind = $mainMod, 8, workspace, 8
  bind = $mainMod, 9, workspace, 9

  # Move active window to a workspace with mainMod + SHIFT + [0-9]
  bind = $mainMod SHIFT, 1, movetoworkspacesilent, 1
  bind = $mainMod SHIFT, 2, movetoworkspacesilent, 2
  bind = $mainMod SHIFT, 3, movetoworkspacesilent, 3
  bind = $mainMod SHIFT, 4, movetoworkspacesilent, 4
  bind = $mainMod SHIFT, 5, movetoworkspacesilent, 5
  bind = $mainMod SHIFT, 6, movetoworkspacesilent, 6
  bind = $mainMod SHIFT, 7, movetoworkspacesilent, 7
  bind = $mainMod SHIFT, 8, movetoworkspacesilent, 8
  bind = $mainMod SHIFT, 9, movetoworkspacesilent, 9

  # Move/resize windows with mainMod + LMB/RMB and dragging
  bindm = $mainMod, mouse:272, movewindow
  bindm = $mainMod SHIFT, mouse:272, resizewindow

  # Lock screen
  bind=,XF86Launch5,exec,swaylock
  bind=,XF86Launch4,exec,swaylock
  bind=$mainMod,backspace,exec,swaylock

  # Keyboard controls (brightness, media, sound, etc)
  bind=,XF86MonBrightnessUp,exec,light -A 10
  bind=,XF86MonBrightnessDown,exec,light -U 10

  bind=,XF86AudioNext,exec,playerctl next
  bind=,XF86AudioPrev,exec,playerctl previous
  bind=,XF86AudioPlay,exec,playerctl play-pause
  bind=,XF86AudioStop,exec,playerctl stop

  bind=,XF86AudioLowerVolume,exec,pactl set-sink-volume @DEFAULT_SINK@ -5%
  bind=,XF86AudioRaiseVolume,exec,pactl set-sink-volume @DEFAULT_SINK@ +5%
  bind=,XF86AudioMute,exec,pactl set-sink-mute @DEFAULT_SINK@ toggle
  bind=$mainMod,comma,exec,pactl set-sink-volume @DEFAULT_SINK@ -5%
  bind=$mainMod,period,exec,pactl set-sink-volume @DEFAULT_SINK@ +5%

  bind=SHIFT,XF86AudioMute,exec,pactl set-source-mute @DEFAULT_SOURCE@ toggle
  bind=,XF86AudioMicMute,exec,pactl set-source-mute @DEFAULT_SOURCE@ toggle

  exec=swaybg -i ${wallpaper} --mode fill
  exec-once = hyprctl setcursor "Bibata-Modern-Ice" 24
  exec-once = xprop -root -f _XWAYLAND_GLOBAL_OUTPUT_SCALE 32c -set _XWAYLAND_GLOBAL_OUTPUT_SCALE 2
  exec-once = ~/.local/bin/desktop-startup
''
