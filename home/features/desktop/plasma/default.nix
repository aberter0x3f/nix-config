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
    ./ime.nix
  ];

  home.packages = with pkgs; [
    wl-clipboard
    ydotool
    # bubblemail
    thunderbird
    libdbusmenu
    kwin-effect-hide-cursor
  ];

  home.sessionVariables = {
    NIXOS_OZONE_WL = "1";
  };
}
