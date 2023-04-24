# Custom packages, that can be defined similarly to ones from nixpkgs
# You can build them using 'nix build .#example' or (legacy) 'nix-build -A example'

{ pkgs ? (import ../nixpkgs.nix) { }, mach-nix }: {
  cpt-fetcher = pkgs.callPackage ./cpt-fetcher { };
  cpt = pkgs.callPackage ./cpt { };
  lxgw-wenkai-gb-fusion = pkgs.callPackage ./lxgw-wenkai-gb-fusion { };
  zhudou-sans = pkgs.callPackage ./zhudou-sans { };
  redfish-sans = pkgs.callPackage ./redfish-sans { inherit mach-nix; };
  locale-en_xx = pkgs.callPackage ./locale-en_xx { };
  # some-qt5-package = pkgs.libsForQt5.callPackage ./some-qt5-package { };
}
