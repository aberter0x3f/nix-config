{ lib, stdenv, fetchurl, pkgs, symlinkJoin }:

let
  src = ./src;
  gitHash = "ecd81cdbd7f7eb2acaaa2f2f7e1a585676f9beff";
in
stdenv.mkDerivation rec {
  pname = "commit-mono";
  version = "V143";

  nativeBuildInputs = with pkgs; [
    nerd-font-patcher
    nodejs
    unzip
  ];

  src-300-regular = fetchurl {
    url = "https://github.com/eigilnikolajsen/commit-mono/raw/${gitHash}/src/fonts/fontlab/CommitMono${version}-300Regular.otf";
    hash = "sha256-gWm72hgrl9BZqCxdaN/MzH7xAGpxB+MPADTzxKVUUv4=";
  };
  src-300-italic = fetchurl {
    url = "https://github.com/eigilnikolajsen/commit-mono/raw/${gitHash}/src/fonts/fontlab/CommitMono${version}-300Italic.otf";
    hash = "sha256-gqiL6k7aiEjxKVuwnly+RkXa8hvL6EerpaFcxwH0/zM=";
  };
  src-400-regular = fetchurl {
    url = "https://github.com/eigilnikolajsen/commit-mono/raw/${gitHash}/src/fonts/fontlab/CommitMono${version}-400Regular.otf";
    hash = "sha256-BP3NbF2zU/j0ILy68LweIFj2OfbGWpM7fFHlOYeukC4=";
  };
  src-400-italic = fetchurl {
    url = "https://github.com/eigilnikolajsen/commit-mono/raw/${gitHash}/src/fonts/fontlab/CommitMono${version}-400Italic.otf";
    hash = "sha256-tdzQnYvLaVuadRCnArxfBNWRwAjiSOP801SyjaPgq40=";
  };
  src-450-regular = fetchurl {
    url = "https://github.com/eigilnikolajsen/commit-mono/raw/${gitHash}/src/fonts/fontlab/CommitMono${version}-450Regular.otf";
    hash = "sha256-80bBH83JEysSItsfc5fN+MGmcjd+PUprC1RgGOUJ1Zg=";
  };
  src-450-italic = fetchurl {
    url = "https://github.com/eigilnikolajsen/commit-mono/raw/${gitHash}/src/fonts/fontlab/CommitMono${version}-450Italic.otf";
    hash = "sha256-VplwZ+zw+1GnPo1v+BhOlCgbDBitwHbTXbKXE0rQ3yU=";
  };
  src-700-regular = fetchurl {
    url = "https://github.com/eigilnikolajsen/commit-mono/raw/${gitHash}/src/fonts/fontlab/CommitMono${version}-700Regular.otf";
    hash = "sha256-3n++wgG/g6B1y0JVo+N3FUX1qTXZgJTeOxckdbIWlgg=";
  };
  src-700-italic = fetchurl {
    url = "https://github.com/eigilnikolajsen/commit-mono/raw/${gitHash}/src/fonts/fontlab/CommitMono${version}-700Italic.otf";
    hash = "sha256-73DUKp5y1iBUMoUuE0KXEhP6IGzoI+BLORWPz/A7L2Q=";
  };

  inherit src;

  enableParallelBuilding = true;

  unpackPhase = ''
    mkdir fonts
    ln -s ${src-300-regular} fonts/CommitMono${version}-300Regular.otf
    ln -s ${src-300-italic}  fonts/CommitMono${version}-300Italic.otf
    ln -s ${src-400-regular} fonts/CommitMono${version}-400Regular.otf
    ln -s ${src-400-italic}  fonts/CommitMono${version}-400Italic.otf
    ln -s ${src-450-regular} fonts/CommitMono${version}-450Regular.otf
    ln -s ${src-450-italic}  fonts/CommitMono${version}-450Italic.otf
    ln -s ${src-700-regular} fonts/CommitMono${version}-700Regular.otf
    ln -s ${src-700-italic}  fonts/CommitMono${version}-700Italic.otf
    node ${src}/tweak.js fonts ${version}
    unzip CommitMono${version}.zip
    cp ${src}/Makefile .
  '';

  installPhase = ''
    runHook preInstall
    install -Dm644 build/*.otf -t $out/share/fonts/opentype/
    runHook postInstall
  '';
}
