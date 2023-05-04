{ pkgs, lib, outputs, callModule, ... }:
{
  imports = [
    ./gtk.nix
    ./qt.nix
    ./wezterm.nix
    ./font.nix
    ./playerctl.nix
  ];

  xdg.mimeApps.enable = true;
}
