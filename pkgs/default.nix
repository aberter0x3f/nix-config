# Custom packages, that can be defined similarly to ones from nixpkgs
# You can build them using 'nix build .#example' or (legacy) 'nix-build -A example'

{ pkgs ? (import ../nixpkgs.nix) { } }: {
  chws-tool = pkgs.callPackage ./chws-tool { };
  cpt-fetcher = pkgs.callPackage ./cpt-fetcher { };
  cpt = pkgs.callPackage ./cpt { };
  eww-tray = pkgs.callPackage ./eww-tray { };
  fonttools-opentype-feature-freezer = pkgs.callPackage ./fonttools-opentype-feature-freezer { };
  kotatogram-desktop-iso-date = pkgs.callPackage ./kotatogram-desktop-iso-date { };
  kulia-mono = pkgs.callPackage ./kulia-mono { };
  locale-en_xx = pkgs.callPackage ./locale-en_xx { };
  lxgw-wenkai-gb-fusion = pkgs.callPackage ./lxgw-wenkai-gb-fusion { };
  nekoray = pkgs.libsForQt5.callPackage ./nekoray { };
  redfish-sans = pkgs.callPackage ./redfish-sans { };
  redfish-serif = pkgs.callPackage ./redfish-serif { };
  zhudou-sans = pkgs.callPackage ./zhudou-sans { };
  # some-qt5-package = pkgs.libsForQt5.callPackage ./some-qt5-package { };
}
