{ inputs, outputs, ... }:

{
  home.packages = [
    inputs.aagl.packages."x86_64-linux".anime-game-launcher
  ];
}
