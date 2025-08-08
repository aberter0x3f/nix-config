{
  pkgs,
  inputs,
  config,
  lib,
  ...
}:

let
  niriScripts = pkgs.callPackage ./scripts { };
in
{
  imports = [
    # inputs.niri.homeModules.niri
    inputs.niri.homeModules.stylix

    ../common
    # ./eww
    ./waybar
    ./cliphist.nix
    ./gtk.nix
    ./mako.nix
    ./qt.nix
    ./swaylock.nix
    ./wmenu.nix
  ];

  home.packages = with pkgs; [
    wl-clipboard
    ydotool
    thunderbird
    nautilus # https://github.com/YaLTeR/niri/issues/702#issuecomment-2392162552
    evince
    xwayland-satellite-stable
  ];

  # programs.niri.package = pkgs.niri-stable;
  programs.niri.package = pkgs.niri;

  programs.niri.settings =
    let
      niri = pkgs.lib.getExe config.programs.niri.package;
    in
    {
      outputs."eDP-1" = {
        enable = true;
        scale = 1.5;
      };

      input = {
        keyboard = {
          repeat-delay = 300;
          repeat-rate = 25;
          xkb = {
            layout = "us(workman-p)";
            options = "ctrl:nocaps";
          };
          track-layout = "global";
        };

        touchpad = {
          enable = true;
          tap = true;
          dwt = true;
          dwtp = false;
          drag = true;
          drag-lock = true;
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

        warp-mouse-to-focus.enable = true;
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
        # hide-on-key-press = true;
        hide-after-inactive-ms = 3000;
      };

      spawn-at-startup = [
        {
          command = [
            "systemctl"
            "--user"
            "restart"
            "xdg-desktop-portal.service"
          ];
        }
        {
          command = [
            "systemctl"
            "--user"
            "restart"
            "xdg-desktop-portal-gnome.service"
          ];
        }
        {
          command = [
            "systemctl"
            "--user"
            "restart"
            "waybar.service"
          ];
        }
        {
          command = [
            "fcitx5"
            "-rd"
          ];
        }
      ];

      screenshot-path = null;

      prefer-no-csd = true;

      animations = {
        slowdown = 0.5;
        workspace-switch.enable = false;
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

      environment = {
        NIXOS_OZONE_WL = "1";
      };

      gestures = {
        hot-corners.enable = false;
      };

      binds = with config.lib.niri.actions; {
        "Mod+Shift+Slash".action = show-hotkey-overlay;

        "Mod+M".action = switch-layout "next";

        "Mod+Return".action = spawn "foot";
        "Mod+D".action = spawn "wmenu-run";
        "Mod+Backspace".action = spawn "swaylock";

        "Mod+Shift+Q".action = spawn (builtins.toString (lib.getExe niriScripts.wpower));
        "Mod+W".action = spawn (builtins.toString (lib.getExe niriScripts.wwindow));
        "Mod+C".action = spawn (builtins.toString (lib.getExe niriScripts.wclip));

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
        "Mod+N".action = focus-column-left;
        "Mod+E".action = focus-window-down;
        "Mod+O".action = focus-window-up;
        "Mod+I".action = focus-column-right;

        "Mod+Shift+Left".action = move-column-left;
        "Mod+Shift+Down".action = move-window-down;
        "Mod+Shift+Up".action = move-window-up;
        "Mod+Shift+Right".action = move-column-right;
        "Mod+Shift+H".action = move-column-left;
        "Mod+Shift+J".action = move-window-down;
        "Mod+Shift+K".action = move-window-up;
        "Mod+Shift+L".action = move-column-right;
        "Mod+Shift+N".action = move-column-left;
        "Mod+Shift+E".action = move-window-down;
        "Mod+Shift+O".action = move-window-up;
        "Mod+Shift+I".action = move-column-right;

        "Mod+1".action = focus-workspace 1;
        "Mod+2".action = focus-workspace 2;
        "Mod+3".action = focus-workspace 3;
        "Mod+4".action = focus-workspace 4;
        "Mod+5".action = focus-workspace 5;
        "Mod+6".action = focus-workspace 6;
        "Mod+7".action = focus-workspace 7;
        "Mod+8".action = focus-workspace 8;
        "Mod+9".action = focus-workspace 9;
        "Mod+exclam".action = focus-workspace 1;
        "Mod+at".action = focus-workspace 2;
        "Mod+numbersign".action = focus-workspace 3;
        "Mod+dollar".action = focus-workspace 4;
        "Mod+percent".action = focus-workspace 5;
        "Mod+asciicircum".action = focus-workspace 6;
        "Mod+ampersand".action = focus-workspace 7;
        "Mod+asterisk".action = focus-workspace 8;
        "Mod+parenleft".action = focus-workspace 9;
        # "Mod+parenleft".action = focus-workspace 1;
        # "Mod+parenright".action = focus-workspace 2;
        # "Mod+braceleft".action = focus-workspace 3;
        # "Mod+braceright".action = focus-workspace 4;
        # "Mod+bracketleft".action = focus-workspace 5;
        # "Mod+bracketright".action = focus-workspace 6;
        # "Mod+less".action = focus-workspace 7;
        # "Mod+greater".action = focus-workspace 8;
        # "Mod+numbersign".action = focus-workspace 9;

        # FIXME: sodiboo/niri-flake #1018
        "Mod+Shift+1".action = spawn [
          niri
          "msg"
          "action"
          "move-column-to-workspace"
          "1"
          "--focus=false"
        ];
        "Mod+Shift+2".action = spawn [
          niri
          "msg"
          "action"
          "move-column-to-workspace"
          "2"
          "--focus=false"
        ];
        "Mod+Shift+3".action = spawn [
          niri
          "msg"
          "action"
          "move-column-to-workspace"
          "3"
          "--focus=false"
        ];
        "Mod+Shift+4".action = spawn [
          niri
          "msg"
          "action"
          "move-column-to-workspace"
          "4"
          "--focus=false"
        ];
        "Mod+Shift+5".action = spawn [
          niri
          "msg"
          "action"
          "move-column-to-workspace"
          "5"
          "--focus=false"
        ];
        "Mod+Shift+6".action = spawn [
          niri
          "msg"
          "action"
          "move-column-to-workspace"
          "6"
          "--focus=false"
        ];
        "Mod+Shift+7".action = spawn [
          niri
          "msg"
          "action"
          "move-column-to-workspace"
          "7"
          "--focus=false"
        ];
        "Mod+Shift+8".action = spawn [
          niri
          "msg"
          "action"
          "move-column-to-workspace"
          "8"
          "--focus=false"
        ];
        "Mod+Shift+9".action = spawn [
          niri
          "msg"
          "action"
          "move-column-to-workspace"
          "9"
          "--focus=false"
        ];
        "Mod+Shift+exclam".action = spawn [
          niri
          "msg"
          "action"
          "move-column-to-workspace"
          "1"
          "--focus=false"
        ];
        "Mod+Shift+at".action = spawn [
          niri
          "msg"
          "action"
          "move-column-to-workspace"
          "2"
          "--focus=false"
        ];
        "Mod+Shift+numbersign".action = spawn [
          niri
          "msg"
          "action"
          "move-column-to-workspace"
          "3"
          "--focus=false"
        ];
        "Mod+Shift+dollar".action = spawn [
          niri
          "msg"
          "action"
          "move-column-to-workspace"
          "4"
          "--focus=false"
        ];
        "Mod+Shift+percent".action = spawn [
          niri
          "msg"
          "action"
          "move-column-to-workspace"
          "5"
          "--focus=false"
        ];
        "Mod+Shift+asciicircum".action = spawn [
          niri
          "msg"
          "action"
          "move-column-to-workspace"
          "6"
          "--focus=false"
        ];
        "Mod+Shift+ampersand".action = spawn [
          niri
          "msg"
          "action"
          "move-column-to-workspace"
          "7"
          "--focus=false"
        ];
        "Mod+Shift+asterisk".action = spawn [
          niri
          "msg"
          "action"
          "move-column-to-workspace"
          "8"
          "--focus=false"
        ];
        "Mod+Shift+parenleft".action = spawn [
          niri
          "msg"
          "action"
          "move-column-to-workspace"
          "9"
          "--focus=false"
        ];
        # "Mod+Shift+parenleft".action = spawn [
        #   niri
        #   "msg"
        #   "action"
        #   "move-column-to-workspace"
        #   "1"
        #   "--focus=false"
        # ];
        # "Mod+Shift+parenright".action = spawn [
        #   niri
        #   "msg"
        #   "action"
        #   "move-column-to-workspace"
        #   "2"
        #   "--focus=false"
        # ];
        # "Mod+Shift+braceleft".action = spawn [
        #   niri
        #   "msg"
        #   "action"
        #   "move-column-to-workspace"
        #   "3"
        #   "--focus=false"
        # ];
        # "Mod+Shift+braceright".action = spawn [
        #   niri
        #   "msg"
        #   "action"
        #   "move-column-to-workspace"
        #   "4"
        #   "--focus=false"
        # ];
        # "Mod+Shift+bracketleft".action = spawn [
        #   niri
        #   "msg"
        #   "action"
        #   "move-column-to-workspace"
        #   "5"
        #   "--focus=false"
        # ];
        # "Mod+Shift+bracketright".action = spawn [
        #   niri
        #   "msg"
        #   "action"
        #   "move-column-to-workspace"
        #   "6"
        #   "--focus=false"
        # ];
        # "Mod+Shift+less".action = spawn [
        #   niri
        #   "msg"
        #   "action"
        #   "move-column-to-workspace"
        #   "7"
        #   "--focus=false"
        # ];
        # "Mod+Shift+greater".action = spawn [
        #   niri
        #   "msg"
        #   "action"
        #   "move-column-to-workspace"
        #   "8"
        #   "--focus=false"
        # ];
        # "Mod+Shift+numbersign".action = spawn [
        #   niri
        #   "msg"
        #   "action"
        #   "move-column-to-workspace"
        #   "9"
        #   "--focus=false"
        # ];

        "Mod+Comma".action = consume-window-into-column;
        "Mod+Period".action = expel-window-from-column;

        "Mod+R".action = switch-preset-column-width;
        "Mod+Shift+R".action = switch-preset-window-height;
        "Mod+Ctrl+R".action = reset-window-height;
        "Mod+F".action = fullscreen-window;
        "Mod+Shift+C".action = center-column;
        "Mod+Shift+F".action = toggle-window-floating;

        "Print".action = screenshot;
        "Mod+Shift+S".action = screenshot;
        # "Ctrl+Print".action = screenshot-screen;
        # "Alt+Print".action = screenshot-window;

        "Mod+Shift+P".action = power-off-monitors;
      };
    };

  home.sessionVariables = {
    NIXOS_OZONE_WL = "1";
  };

  # systemd.user.services.xdg-desktop-portal-gnome.Service.ExecStartPre="${pkgs.coreutils}/bin/sleep 2";

  stylix.targets.niri.enable = true;
}
