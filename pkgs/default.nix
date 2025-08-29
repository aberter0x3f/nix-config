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
  fonttools-opentype-feature-freezer = pkgs.callPackage ./fonttools-opentype-feature-freezer {
    inherit inputs;
  };
  hyde = pkgs.callPackage ./hyde { };
  # hyprscroller = callHyprlandPluginPackage ./hyprscroller { };
  # hyprslidr = callHyprlandPluginPackage ./hyprslidr { };
  # hysteria-1 = pkgs.callPackage ./hysteria-1 { };
  kotatogram-desktop-iso-date = pkgs.callPackage ./kotatogram-desktop-iso-date { };
  kwin-effect-hide-cursor = pkgs.kdePackages.callPackage ./kwin-effect-hide-cursor { };
  lmms-nightly = pkgs.libsForQt5.callPackage ./lmms-nightly { };
  locale-en_xx = pkgs.callPackage ./locale-en_xx { };
  mieru = pkgs.callPackage ./mieru { };
  nekoray = pkgs.libsForQt5.callPackage ./nekoray { };
  openutau = pkgs.callPackage ./openutau { };
  openutau-lunai = pkgs.callPackage ./openutau-lunai { };
  # openutau_1 = pkgs.callPackage ./openutau_1 { };
  project-lemonlime = pkgs.callPackage ./project-lemonlime { };
  # redfish-sans = pkgs.callPackage ./redfish-sans { inherit inputs; };
  # redfish-serif = pkgs.callPackage ./redfish-serif { inherit inputs; };
  rime-alpha-pinyin = pkgs.callPackage ./rime-alpha-pinyin { };
  sarasa-gothic-mod = pkgs.callPackage ./sarasa-gothic-mod { };
  sarasa-ubuntu-mono = pkgs.callPackage ./sarasa-ubuntu-mono { };
  # some-qt5-package = pkgs.libsForQt5.callPackage ./some-qt5-package { };
}
