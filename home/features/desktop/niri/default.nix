{
  pkgs,
  inputs,
  config,
  ...
}:
{
  imports = [
    inputs.niri.homeModules.niri
    inputs.niri.homeModules.stylix

    ../common
    ./eww
    ./anyrun.nix
    # ./fuzzel.nix
    ./gtk.nix
    # ./ime.nix
    ./mako.nix
    ./qt.nix
    ./swaylock.nix
  ];

  home.packages = with pkgs; [
    wl-clipboard
    ydotool
    thunderbird
    nautilus # https://github.com/YaLTeR/niri/issues/702#issuecomment-2392162552
    evince
  ];

  programs.niri.package = pkgs.niri-unstable;

  programs.niri.settings = {
    outputs."eDP-1" = {
      enable = true;
      scale = 1.5;
    };

    input = {
      keyboard = {
        repeat-delay = 300;
        repeat-rate = 25;

        xkb.options = "ctrl:nocaps";
      };

      touchpad = {
        enable = true;
        tap = true;
        dwt = true;
        dwtp = false;
        natural-scroll = false;
        accel-speed = 0.0;
        accel-profile = "adaptive";
        scroll-method = "two-finger";
        disabled-on-external-mouse = false;
      };

      mouse = {
        enable = true;
        natural-scroll = false;
        accel-profile = "adaptive";
        scroll-method = "no-scroll";
      };

      warp-mouse-to-focus = true;
    };

    layout =
      let
        eps = 1.0e-2;
      in
      {
        gaps = 8;
        struts = {
          left = -8;
          right = -8;
          top = 0;
          bottom = -8;
        };
        border.width = 2;
        preset-column-widths = [
          { proportion = 1.0 / 3.0 - eps; }
          { proportion = 1.0 / 2.0 - eps; }
          { proportion = 2.0 / 3.0 - eps; }
        ];
        default-column-width = {
          proportion = 1.0 / 2.0 - eps;
        };
        center-focused-column = "never";
      };

    cursor = {
      hide-on-key-press = true;
      hide-after-inactive-ms = 3000;
    };

    spawn-at-startup = [
      {
        command = [
          "systemctl"
          "restart"
          "--user"
          "xdg-desktop-portal.service"
        ];
      }
      {
        command = [
          "systemctl"
          "restart"
          "--user"
          "xdg-desktop-portal-gnome.service"
        ];
      }
      {
        command = [
          "fcitx5"
          "-rd"
        ];
      }
      {
        command = [
          "eww"
          "open"
          "bar"
        ];
      }
    ];

    screenshot-path = null;

    # prefer-no-csd = true;

    animations = {
      slowdown = 0.5;
      workspace-switch = null;
    };

    window-rules = [
      {
        matches = [
          { app-id = "^org\\.keepassxc\\.KeePassXC$"; }
          { app-id = "^org\\.gnome\\.World\\.Secrets$"; }
        ];
        block-out-from = "screen-capture";
      }
    ];

    workspaces = {
      "1" = {
        open-on-output = "eDP-1";
      };
      "2" = {
        open-on-output = "eDP-1";
      };
      "3" = {
        open-on-output = "eDP-1";
      };
      "4" = {
        open-on-output = "eDP-1";
      };
      "5" = {
        open-on-output = "eDP-1";
      };
      "6" = {
        open-on-output = "eDP-1";
      };
      "7" = {
        open-on-output = "eDP-1";
      };
      "8" = {
        open-on-output = "eDP-1";
      };
      "9" = {
        open-on-output = "eDP-1";
      };
    };

    binds = with config.lib.niri.actions; {
      "Mod+Shift+Slash".action = show-hotkey-overlay;

      "Mod+Return".action = spawn "${config.home.sessionVariables.TERMINAL}";
      "Mod+D".action = spawn "anyrun";
      "Super+Backspace".action = spawn "swaylock";

      "XF86AudioRaiseVolume".action = spawn "wpctl" "set-volume" "@DEFAULT_SINK@" "0.05+";
      "XF86AudioRaiseVolume".allow-when-locked = true;

      "XF86AudioLowerVolume".action = spawn "wpctl" "set-volume" "@DEFAULT_SINK@" "0.05-";
      "XF86AudioLowerVolume".allow-when-locked = true;

      "XF86AudioMute".action = spawn "wpctl" "set-mute" "@DEFAULT_SINK@" "toggle";
      "XF86AudioMute".allow-when-locked = true;

      "XF86AudioMicMute".action = spawn "wpctl" "set-mute" "@DEFAULT_SOURCE@" "toggle";
      "XF86AudioMicMute".allow-when-locked = true;

      "Mod+Q".action = close-window;

      "Mod+Left".action = focus-column-left;
      "Mod+Down".action = focus-window-down;
      "Mod+Up".action = focus-window-up;
      "Mod+Right".action = focus-column-right;
      "Mod+H".action = focus-column-left;
      "Mod+J".action = focus-window-down;
      "Mod+K".action = focus-window-up;
      "Mod+L".action = focus-column-right;

      "Mod+Shift+Left".action = move-column-left;
      "Mod+Shift+Down".action = move-window-down;
      "Mod+Shift+Up".action = move-window-up;
      "Mod+Shift+Right".action = move-column-right;
      "Mod+Shift+H".action = move-column-left;
      "Mod+Shift+J".action = move-window-down;
      "Mod+Shift+K".action = move-window-up;
      "Mod+Shift+L".action = move-column-right;

      "Mod+1".action = focus-workspace 1;
      "Mod+2".action = focus-workspace 2;
      "Mod+3".action = focus-workspace 3;
      "Mod+4".action = focus-workspace 4;
      "Mod+5".action = focus-workspace 5;
      "Mod+6".action = focus-workspace 6;
      "Mod+7".action = focus-workspace 7;
      "Mod+8".action = focus-workspace 8;
      "Mod+9".action = focus-workspace 9;

      "Mod+Shift+1".action = move-column-to-workspace 1;
      "Mod+Shift+2".action = move-column-to-workspace 2;
      "Mod+Shift+3".action = move-column-to-workspace 3;
      "Mod+Shift+4".action = move-column-to-workspace 4;
      "Mod+Shift+5".action = move-column-to-workspace 5;
      "Mod+Shift+6".action = move-column-to-workspace 6;
      "Mod+Shift+7".action = move-column-to-workspace 7;
      "Mod+Shift+8".action = move-column-to-workspace 8;
      "Mod+Shift+9".action = move-column-to-workspace 9;

      "Mod+Comma".action = consume-window-into-column;
      "Mod+Period".action = expel-window-from-column;

      "Mod+BracketLeft".action = consume-or-expel-window-left;
      "Mod+BracketRight".action = consume-or-expel-window-right;

      "Mod+R".action = switch-preset-column-width;
      "Mod+Shift+R".action = switch-preset-window-height;
      "Mod+Ctrl+R".action = reset-window-height;
      "Mod+F".action = fullscreen-window;
      "Mod+C".action = center-column;

      "Print".action = screenshot;
      "Ctrl+Print".action = screenshot-screen;
      "Alt+Print".action = screenshot-window;

      "Mod+Shift+Q".action = quit;

      "Mod+Shift+P".action = power-off-monitors;
    };
  };

  home.sessionVariables = {
    NIXOS_OZONE_WL = "1";
  };

  # systemd.user.services.xdg-desktop-portal-gnome.Service.ExecStartPre="${pkgs.coreutils}/bin/sleep 2";

  stylix.targets.niri.enable = true;
}
