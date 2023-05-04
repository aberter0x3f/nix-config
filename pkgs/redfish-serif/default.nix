{ lib, stdenv, fetchurl, pkgs }:

let
  rename-script = ./src/fontname.py;
  makefile = ./src/Makefile;
  chws-tool = pkgs.callPackage ../chws-tool { };
  fonttools-opentype-feature-freezer = pkgs.callPackage ../fonttools-opentype-feature-freezer { };
in
stdenv.mkDerivation rec {
  pname = "redfish-serif";
  version = "2.001";

  nativeBuildInputs = with pkgs; [
    unzip
    chws-tool
    fonttools-opentype-feature-freezer
    python3Packages.fonttools
  ];

  src = fetchurl {
    url = "https://github.com/notofonts/noto-cjk/raw/Serif${version}/Serif/Variable/OTF/NotoSerifCJKsc-VF.otf";
    sha256 = "sha256-rMaJTwpjYevb2QCajXw1WqlYLgVkStBVWYGSA00kpvA=";
  };

  unpackPhase = ''
    runHook preUnpack
    cp ${src} NotoSerifCJKsc-VF.otf
    runHook postUnpack
  '';

  patchPhase = ''
    ln -s ${rename-script} fontname.py
    ln -s ${makefile} Makefile
  '';

  installPhase = ''
    runHook preInstall
    install -Dm644 build/*.otf -t $out/share/fonts/opentype/
    runHook postInstall
  '';
}
