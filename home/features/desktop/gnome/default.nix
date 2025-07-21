{
  pkgs,
  ...
}:
{
  imports = [
    ../common
    ./dconf.nix
    ./ime.nix
    ./stylix.nix
  ];

  home.packages = with pkgs; [
    wl-clipboard
    ydotool
    gnomeExtensions.kimpanel
    refine # gnome tweaks
  ];

  home.sessionVariables = {
    NIXOS_OZONE_WL = "1";
  };
}
