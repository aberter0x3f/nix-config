{ lib, stdenv, fetchurl, pkgs }:

let
  src = ./src;
  rename-script = src + "/fontname.py";
  fonttools-opentype-feature-freezer = pkgs.callPackage ../fonttools-opentype-feature-freezer { };
in
stdenv.mkDerivation rec {
  pname = "kulia-mono";
  inherit (pkgs.julia-mono) version;

  nativeBuildInputs = with pkgs; [
    unzip
    fonttools-opentype-feature-freezer
    nerd-font-patcher
    python3Packages.fonttools
  ];

  inherit src;

  enableParallelBuilding = true;

  patchPhase = ''
    ln -s ${pkgs.julia-mono}/share/fonts/truetype/*.ttf .
    ln -s ${rename-script} .
  '';

  installPhase = ''
    runHook preInstall
    install -Dm644 build/*.ttf -t $out/share/fonts/truetype/
    runHook postInstall
  '';
}
