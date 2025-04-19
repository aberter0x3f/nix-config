{
  inputs,
  pkgs,
  lib,
  config,
  ...
}:

let
  hyprlandScripts = pkgs.callPackage ./scripts { };
in
{
  imports = [
    ../common
    ./cliphist.nix
    ./eww
    ./gtk.nix
    # ./ime.nix
    ./mako.nix
    ./playerctl.nix
    ./qt.nix
    ./swaylock.nix
    ./wmenu.nix

    inputs.hyprland.homeManagerModules.default
  ];

  home.packages = with pkgs; [
    wl-clipboard
    ydotool
    thunderbird
    grimblast
    libnotify
    slurp
    grim
    nautilus # https://github.com/YaLTeR/niri/issues/702#issuecomment-2392162552
    evince
  ];

  wayland.windowManager.hyprland = {
    enable = true;
    package = inputs.hyprland.packages.${pkgs.stdenv.hostPlatform.system}.hyprland;
    plugins = [ pkgs.hyprslidr ];
    systemd = {
      enable = true;
      variables = [ "--all" ];
      enableXdgAutostart = true;
    };

    settings = {
      monitor = [
        "eDP-1, 2880x1800, 0x0, 1.5"
      ];

      input = {
        kb_layout = "workman-aberter,qwerty-aberter,us";
        kb_options = "ctrl:nocaps,grp:alt_space_toggle";
        repeat_rate = 25;
        repeat_delay = 300;
        numlock_by_default = 1;
        resolve_binds_by_sym = true;

        follow_mouse = 0;
        mouse_refocus = true;
        float_switch_override_focus = 0;

        touchpad = {
          disable_while_typing = 1;
          natural_scroll = 0;
          clickfinger_behavior = 1;
          middle_button_emulation = 1;
          tap-to-click = 1;
          tap-and-drag = true;
          drag_lock = 1;
        };

        accel_profile = "adaptive";
        sensitivity = 0; # -1.0 - 1.0, 0 means no modification.
      };

      general = {
        gaps_in = 5;
        gaps_out = 5;
        border_size = 2;

        layout = "slidr";
      };

      decoration = {
        rounding = 0;
        blur.enabled = false;
        shadow.enabled = false;
      };

      animations = {
        enabled = true;
        first_launch_animation = false;

        bezier = [
          "easein, 0.11, 0, 0.5, 0"
          "easeout, 0.5, 1, 0.89, 1"
          "easeinout, 0.45, 0, 0.55, 1"
        ];

        animation = [
          "windowsIn, 1, 1, easeout, slide"
          "windowsOut, 1, 1, easein, slide"
          "windowsMove, 1, 1, easeout"

          "fadeIn, 0"
          "fadeOut, 0"
          "fadeSwitch, 0"
          "fadeShadow, 0"
          "fadeDim, 0"

          "workspaces, 0"
        ];
      };

      gestures = {
        workspace_swipe = false;
      };

      misc = {
        disable_hyprland_logo = true;
      };

      cursor = {
        inactive_timeout = 3.0;
      };

      env = [
        "NIXOS_OZONE_WL,1"
      ];

      "$mod" = "SUPER";
      "$term" = config.home.sessionVariables.TERMINAL;

      bind = [
        "$mod, Return, exec, $term"
        "$mod, D, exec, wmenu-run"
        "$mod, Q, killactive,"
        "$mod, F, fullscreen, 0"
        "$mod SHIFT, Q, exec, ${builtins.toString (lib.getExe hyprlandScripts.wpower)}"
        "$mod, W, exec, ${builtins.toString (lib.getExe hyprlandScripts.wwindow)}"
        "$mod, C, exec, ${builtins.toString (lib.getExe hyprlandScripts.wclip)}"
        "$mod SHIFT, C, exec, ${builtins.toString (lib.getExe hyprlandScripts.color-picker)}"
        "$mod SHIFT, P, exec, sleep 0.1s && hyprctl dispatch dpms toggle"
        "$mod SHIFT, F, togglefloating,"
        ", Print, exec, grimblast copy area"

        "$mod, H, slidr:movefocus, l"
        "$mod, J, slidr:movefocus, d"
        "$mod, K, slidr:movefocus, u"
        "$mod, L, slidr:movefocus, r"
        "$mod, N, slidr:movefocus, l"
        "$mod, E, slidr:movefocus, d"
        "$mod, O, slidr:movefocus, u"
        "$mod, I, slidr:movefocus, r"

        "$mod SHIFT, H, movewindow, l"
        "$mod SHIFT, J, movewindow, d"
        "$mod SHIFT, K, movewindow, u"
        "$mod SHIFT, L, movewindow, r"
        "$mod SHIFT, N, movewindow, l"
        "$mod SHIFT, E, movewindow, d"
        "$mod SHIFT, O, movewindow, u"
        "$mod SHIFT, I, movewindow, r"

        "$mod, 1, workspace, 1"
        "$mod, 2, workspace, 2"
        "$mod, 3, workspace, 3"
        "$mod, 4, workspace, 4"
        "$mod, 5, workspace, 5"
        "$mod, 6, workspace, 6"
        "$mod, 7, workspace, 7"
        "$mod, 8, workspace, 8"
        "$mod, 9, workspace, 9"
        "$mod, parenleft, workspace, 1"
        "$mod, parenright, workspace, 2"
        "$mod, braceleft, workspace, 3"
        "$mod, braceright, workspace, 4"
        "$mod, bracketleft, workspace, 5"
        "$mod, bracketright, workspace, 6"
        "$mod, less, workspace, 7"
        "$mod, greater, workspace, 8"
        "$mod, numbersign, workspace, 9"

        "$mod SHIFT, 1, movetoworkspacesilent, 1"
        "$mod SHIFT, 2, movetoworkspacesilent, 2"
        "$mod SHIFT, 3, movetoworkspacesilent, 3"
        "$mod SHIFT, 4, movetoworkspacesilent, 4"
        "$mod SHIFT, 5, movetoworkspacesilent, 5"
        "$mod SHIFT, 6, movetoworkspacesilent, 6"
        "$mod SHIFT, 7, movetoworkspacesilent, 7"
        "$mod SHIFT, 8, movetoworkspacesilent, 8"
        "$mod SHIFT, 9, movetoworkspacesilent, 9"
        "$mod SHIFT, parenleft, movetoworkspacesilent, 1"
        "$mod SHIFT, parenright, movetoworkspacesilent, 2"
        "$mod SHIFT, braceleft, movetoworkspacesilent, 3"
        "$mod SHIFT, braceright, movetoworkspacesilent, 4"
        "$mod SHIFT, bracketleft, movetoworkspacesilent, 5"
        "$mod SHIFT, bracketright, movetoworkspacesilent, 6"
        "$mod SHIFT, less, movetoworkspacesilent, 7"
        "$mod SHIFT, greater, movetoworkspacesilent, 8"
        "$mod SHIFT, numbersign, movetoworkspacesilent, 9"

        "$mod, R, slidr:cyclesize, next"

        "$mod, Comma, slidr:admitwindow,"
        "$mod, Period, slidr:expelwindow,"

        ", XF86Launch5, exec, swaylock"
        ", XF86Launch4, exec, swaylock"
        "$mod, Backspace, exec, swaylock"

        ", XF86MonBrightnessUp, exec, light -A 10"
        ", XF86MonBrightnessDown, exec, light -U 10"

        ", XF86AudioNext, exec, playerctl next"
        ", XF86AudioPrev, exec, playerctl previous"
        ", XF86AudioPlay, exec, playerctl play-pause"
        ", XF86AudioStop, exec, playerctl stop"

        ", XF86AudioLowerVolume, exec, wpctl set-volume @DEFAULT_SINK@ 5%-"
        ", XF86AudioRaiseVolume, exec, wpctl set-volume @DEFAULT_SINK@ 5%+"
        ", XF86AudioMute, exec, wpctl set-mute @DEFAULT_SINK@ toggle"
        ", XF86AudioMicMute, exec, wpctl set-mute @DEFAULT_SOURCE@ toggle"
      ];

      bindm = [
        "$mod, mouse:272, movewindow"
        "$mod SHIFT, mouse:272, reizewindow"
      ];

      exec-once = [
        "fcitx5 -rd"
        "eww open bar"
      ];

      plugin = {
        # scroller = {
        #   gesture_scroll_enable = false;
        #   gesture_overview_enable = false;
        #   gesture_workspace_switch_enable = false;
        #   center_row_if_space_available = true;
        #   focus_wrap = false;
        # };
      };
    };
  };

  home.sessionVariables = {
    NIXOS_OZONE_WL = "1";
  };

  services.hyprpaper.enable = lib.mkForce false;

  stylix.targets.hyprland.enable = true;
}
