{ lib, stdenv, fetchurl, pkgs, inputs }:

let
  src = ./src;
  rename-script = src + "/fontname.py";
  fonttools-opentype-feature-freezer = pkgs.callPackage ../fonttools-opentype-feature-freezer { inherit inputs; };
in
stdenv.mkDerivation rec {
  pname = "kulia-mono";
  inherit (pkgs.julia-mono) version;

  nativeBuildInputs = with pkgs; [
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
