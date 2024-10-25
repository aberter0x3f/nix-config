{
  inputs,
  lib,
  config,
  pkgs,
  ...
}:
{
  imports = [
    ../common
    ./eww
    ./gtk.nix
    ./mako.nix
    ./qt.nix
    ./swaylock.nix
    ./wofi.nix
    # ./zathura.nix

    inputs.hyprland.homeManagerModules.default
  ];

  home.packages = with pkgs; [
    grim
    imv
    mimeo
    slurp
    swaybg
    waypipe
    wf-recorder
    wl-clipboard
    wl-mirror
    ydotool
    evince
    bubblemail
  ];

  home.sessionVariables = {
    MOZ_ENABLE_WAYLAND = 1;
    QT_QPA_PLATFORM = "wayland";
    LIBSEAT_BACKEND = "logind";
  };

  programs = {
    fish.loginShellInit = ''
      if test (tty) = "/dev/tty1"
        exec Hyprland &> /dev/null
      end
    '';
    zsh.loginExtra = ''
      if [ "$(tty)" = "/dev/tty1" ]; then
        exec Hyprland &> /dev/null
      fi
    '';
    zsh.profileExtra = ''
      if [ "$(tty)" = "/dev/tty1" ]; then
        exec Hyprland &> /dev/null
      fi
    '';
  };

  wayland.windowManager.hyprland = {
    enable = true;
    xwayland = {
      enable = true;
    };
    # recommendedEnvironment = true;
    extraConfig =
      (import ./monitors.nix {
        inherit lib;
        inherit (config) monitors;
      })
      + (import ./config.nix {
        inherit pkgs;
        inherit (config) colorscheme wallpaper home;
      });
  };
}
