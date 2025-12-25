# Custom packages, that can be defined similarly to ones from nixpkgs
# You can build them using 'nix build .#example' or (legacy) 'nix-build -A example'
{
  pkgs,
  inputs,
}:

# let
#   callHyprlandPluginPackage =
#     (import inputs.nixpkgs {
#       inherit (pkgs) system;
#       overlays = [
#         inputs.hyprland-plugins.overlays.hyprland-plugins
#         inputs.hyprland-plugins.overlays.gcc14Stdenv
#         inputs.hyprland.overlays.hyprland-packages
#       ];
#     }).callPackage;
# in
{
  # bubblemail = pkgs.callPackage ./bubblemail { };
  chws-tool = pkgs.callPackage ./chws-tool { inherit inputs; };
  commit-mono = pkgs.callPackage ./commit-mono { };
  cpt-fetcher = pkgs.callPackage ./cpt-fetcher { };
  cpt = pkgs.callPackage ./cpt { };
  davinci-resolve-paid = pkgs.callPackage ./davinci-resolve-paid { };
  fonttools-opentype-feature-freezer = pkgs.callPackage ./fonttools-opentype-feature-freezer {
    inherit inputs;
  };
  hyde = pkgs.callPackage ./hyde { };
  kwin-effect-hide-cursor = pkgs.kdePackages.callPackage ./kwin-effect-hide-cursor { };
  lmms-nightly = pkgs.libsForQt5.callPackage ./lmms-nightly { };
  locale-en_xx = pkgs.callPackage ./locale-en_xx { };
  mieru = pkgs.callPackage ./mieru { };
  openutau-lunai = pkgs.callPackage ./openutau-lunai { };
  project-lemonlime = pkgs.callPackage ./project-lemonlime { };
  rime-alpha-pinyin = pkgs.callPackage ./rime-alpha-pinyin { };
  sarasa-gothic-mod = pkgs.callPackage ./sarasa-gothic-mod { };
  sarasa-ubuntu-mono = pkgs.callPackage ./sarasa-ubuntu-mono { };
  # some-qt5-package = pkgs.libsForQt5.callPackage ./some-qt5-package { };
}
