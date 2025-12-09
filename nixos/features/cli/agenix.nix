{ inputs, pkgs, ... }:
{
  imports = [
    inputs.agenix.nixosModules.default

    ../../../secrets/age-files.nix
  ];

  environment.systemPackages = [ inputs.agenix.packages.${pkgs.stdenv.hostPlatform.system}.default ];
}
