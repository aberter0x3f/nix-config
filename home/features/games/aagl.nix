{ inputs, outputs, pkgs, ... }:

{
  home.packages = [
    inputs.aagl.packages.${pkgs.system}.anime-game-launcher
  ];
}
