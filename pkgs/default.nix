# Custom packages, that can be defined similarly to ones from nixpkgs
# You can build them using 'nix build .#example' or (legacy) 'nix-build -A example'

{ pkgs ? (import ../nixpkgs.nix) { } }: {
  cpt-fetcher = pkgs.callPackage ./cpt-fetcher { };
  cpt = pkgs.callPackage ./cpt { };
  lxgw-wenkai-gb-fusion = pkgs.callPackage ./lxgw-wenkai-gb-fusion { };
  zhudou-sans = pkgs.callPackage ./zhudou-sans { };
  locale-en_xx = pkgs.callPackage ./locale-en_xx { };
  sarasa-term-sc-nerd-font = pkgs.callPackage ./sarasa-term-sc-nerd-font { };
  fonttools-opentype-feature-freezer = pkgs.callPackage ./fonttools-opentype-feature-freezer { };
  chws-tool = pkgs.callPackage ./chws-tool { };
  redfish-sans = pkgs.callPackage ./redfish-sans { };
  redfish-serif = pkgs.callPackage ./redfish-serif { };
  eww-tray = pkgs.callPackage ./eww-tray { };
  # some-qt5-package = pkgs.libsForQt5.callPackage ./some-qt5-package { };
}
