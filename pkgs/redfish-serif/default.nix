{
  lib,
  stdenv,
  inputs,
  fetchurl,
  pkgs,
}:
let
  rename-script = ./src/fontname.py;
  makefile = ./src/Makefile;
  chws-tool = pkgs.callPackage ../chws-tool { inherit inputs; };
  fonttools-opentype-feature-freezer = pkgs.callPackage ../fonttools-opentype-feature-freezer {
    inherit inputs;
  };
in
stdenv.mkDerivation rec {
  pname = "redfish-serif";
  version = "2.002";

  nativeBuildInputs = with pkgs; [
    unzip
    chws-tool
    fonttools-opentype-feature-freezer
    python3Packages.fonttools
  ];

  src = fetchurl {
    url = "https://github.com/notofonts/noto-cjk/releases/download/Serif${version}/09_NotoSerifCJKsc.zip";
    sha256 = "sha256-7u3nL1uIZVo2MPGGYRVQKFeK/IiqnmflXbRai1vkZ4k=";
  };

  enableParallelBuilding = true;

  unpackPhase = ''
    runHook preUnpack
    unzip $src
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
