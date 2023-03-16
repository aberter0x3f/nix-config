# This file describes your repository contents.
# It should return a set of nix derivations
# and optionally the special attributes `lib`, `modules` and `overlays`.
# It should NOT import <nixpkgs>. Instead, you should take pkgs as an argument.
# Having pkgs default to <nixpkgs> is fine though, and it lets you use short
# commands such as:
#     nix-build -A mypackage

{ system ? builtins.currentSystem, pkgs ? import <nixpkgs> { } }:

{
  # The `lib`, `modules`, and `overlay` names are special
  lib = import ./lib { inherit pkgs; }; # functions
  modules = import ./modules; # NixOS modules
  overlays = import ./overlays; # nixpkgs overlays

  cpt-fetcher = pkgs.callPackage ./pkgs/cpt-fetcher { };
  cpt = pkgs.callPackage ./pkgs/cpt { };
  rtw89-zen = pkgs.callPackage ./pkgs/rtw89-zen { };
  lxgw-fasmart-gothic = pkgs.callPackage ./pkgs/lxgw-fasmart-gothic { };
  lxgw-wenkai-gb-fusion = pkgs.callPackage ./pkgs/lxgw-wenkai-gb-fusion { };
  noto-sans-sc = pkgs.callPackage ./pkgs/noto-sans-sc { };
  zhudou-sans = pkgs.callPackage ./pkgs/zhudou-sans { };
  locale-en_xx = pkgs.callPackage ./pkgs/locale-en_xx { };
  # some-qt5-package = pkgs.libsForQt5.callPackage ./pkgs/some-qt5-package { };
  # ...
}
