{ pkgs, lib, outputs, config, ... }:

{
  imports = [
    ./font.nix
    ./gtk.nix
    ./playerctl.nix
    ./proxy.nix
    ./qt.nix
    ./wezterm.nix
  ];

  home.packages = with pkgs; [
    # Web broswer
    librewolf
    # Terminal
    kitty
    # IM
    kotatogram-desktop-iso-date
    qq
    # GUI editor
    vscode-fhs
  ];

  xdg.mimeApps.enable = true;
}
