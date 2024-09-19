{ inputs, lib, config, pkgs, ... }: {
  imports = [
    ../common
    ./ime.nix
  ];

  home.packages = with pkgs; [
    wl-clipboard
    ydotool
    bubblemail
    libdbusmenu
    kwin-effect-hide-cursor
  ];

  home.sessionVariables = {
    NIXOS_OZONE_WL = "1";
  };
}
