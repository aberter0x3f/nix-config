# This is your home-manager configuration file
# Use this to configure your home environment (it replaces ~/.config/nixpkgs/home.nix)
{ inputs, outputs, ... }:
{
  # You can import other home-manager modules here
  imports = [
    ./global
    # ./features/desktop/hyprland
    # ./features/desktop/plasma
    ./features/desktop/niri
    ./features/games
  ] ++ (builtins.attrValues outputs.homeManagerModules);

  home.username = "yzy1";
}
