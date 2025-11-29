{ pkgs, ... }:

let
  godotPackages = pkgs.godotPackages_4_5;
in
{
  home.packages = [
    godotPackages.godot-mono
    pkgs.dotnet-sdk_9
    pkgs.omnisharp-roslyn
  ];
}
