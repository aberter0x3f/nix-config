{ inputs, pkgs, ... }:
{
  imports = [
    inputs.niri.nixosModules.niri

    ./common
  ];

  nixpkgs.overlays = [
    inputs.niri.overlays.niri
  ];

  services.xserver = {
    enable = true;

    displayManager.startx.enable = true;

    desktopManager.runXdgAutostartIfNone = true;
  };

  services.displayManager.ly.enable = true;

  programs.niri = {
    enable = true;
    # package = pkgs.niri-stable;
    package = pkgs.niri;
  };

  services.gnome.gnome-keyring.enable = true;
}
