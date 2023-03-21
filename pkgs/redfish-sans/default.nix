{ lib, stdenvNoCC, fetchurl, pkgs, ... }:

stdenvNoCC.mkDerivation rec {
  pname = "redfish-sans";
  version = "1.000";

  zhudou-version = "1.000";
  zhudou-src = fetchurl {
    url = "https://github.com/Buernia/Zhudou-Sans/releases/download/v${version}/Zhudou.Sans.zip";
    hash = "sha256-2uX/efjx23hmGm7ArnwXMpZcA0o8BL2VzUO6q9FJlso=";
  };

  nativeBuildInputs = with pkgs; [ unzip fontforge ];

  unpackPhase = ''
    unzip ${zhudou-src}
    ln -s ${pkgs.fira-go}/share/fonts/opentype/*.otf .
    ln -s ${pkgs.sarasa-gothic}/share/fonts/truetype/*.ttc .
  '';

  buildPhase = let build-script = ./build.py; in
    ''
      fontforge ${build-script}
    '';

  installPhase = ''
    runHook preInstall
    install -Dm644 RedFish-*.otf -t $out/share/fonts/opentype/
    runHook postInstall
  '';
}
