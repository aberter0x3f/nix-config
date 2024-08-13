# Custom packages, that can be defined similarly to ones from nixpkgs
# You can build them using 'nix build .#example' or (legacy) 'nix-build -A example'

{ pkgs, inputs }:
{
  chws-tool = pkgs.callPackage ./chws-tool { inherit inputs; };
  commit-mono = pkgs.callPackage ./commit-mono { };
  cpt-fetcher = pkgs.callPackage ./cpt-fetcher { };
  cpt = pkgs.callPackage ./cpt { };
  eww-tray = pkgs.callPackage ./eww-tray { };
  fonttools-opentype-feature-freezer = pkgs.callPackage ./fonttools-opentype-feature-freezer { inherit inputs; };
  hyde = pkgs.callPackage ./hyde { };
  hysteria-1 = pkgs.callPackage ./hysteria-1 { };
  kotatogram-desktop-iso-date = pkgs.callPackage ./kotatogram-desktop-iso-date { };
  kwin-effect-hide-cursor = pkgs.kdePackages.callPackage ./kwin-effect-hide-cursor { };
  lmms-nightly = pkgs.libsForQt5.callPackage ./lmms-nightly { };
  # locale-en_se = pkgs.callPackage ./locale-en_se { };
  locale-en_xx = pkgs.callPackage ./locale-en_xx { };
  mieru = pkgs.callPackage ./mieru { };
  nekoray = pkgs.libsForQt5.callPackage ./nekoray { };
  redfish-sans = pkgs.callPackage ./redfish-sans { inherit inputs; };
  redfish-serif = pkgs.callPackage ./redfish-serif { inherit inputs; };
  # some-qt5-package = pkgs.libsForQt5.callPackage ./some-qt5-package { };
}
