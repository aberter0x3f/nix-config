# This is your home-manager configuration file
# Use this to configure your home environment (it replaces ~/.config/nixpkgs/home.nix)

{ inputs, outputs, ... }:

{
  # You can import other home-manager modules here
  imports = [
    inputs.nix-colors.homeManagerModules.default
    ./global
    ./features/desktop/hyprland
  ] ++ (builtins.attrValues outputs.homeManagerModules);

  home.username = "yzy1";
  colorscheme = inputs.nix-colors.colorSchemes.one-light;
  wallpaper = ./wallpapers/planet-mountains-snow-4k.jpg;
  monitors = [{
    name = "eDP-1";
    width = 3840;
    height = 2400;
    refreshRate = 90;
    x = 0;
    scale = "1.5";
    workspaces = [ "1" "2" "3" "4" "5" "6" "7" "8" "9" ];
  }];
}
