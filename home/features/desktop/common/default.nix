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

  xdg.mimeApps.enable = true;
}
