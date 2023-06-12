{ pkgs, ... }:
{
  imports = [
    ./eww
    ./mako.nix
    ./swayidle.nix
    ./swaylock.nix
    ./wofi.nix
    # ./zathura.nix
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
  ];

  home.sessionVariables = {
    MOZ_ENABLE_WAYLAND = 1;
    QT_QPA_PLATFORM = "wayland";
    LIBSEAT_BACKEND = "logind";
  };
}
