{ pkgs, lib, outputs, config, ... }:

{
  imports = [
    ./font.nix
    ./proxy.nix
    ./wezterm.nix
  ];

  home.packages = with pkgs; [
    # Web broswer
    librewolf
    brave
    # Terminal
    kitty
    # IM
    kotatogram-desktop-iso-date
    qq
    # GUI editor
    vscode-fhs
    # DAW
    # lmms-nightly
  ];

  xdg.mimeApps.enable = true;
}
