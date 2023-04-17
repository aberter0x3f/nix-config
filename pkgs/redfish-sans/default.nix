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
      fontforge ${build-script} 'ExtraLight' 0 'Zhudou Sans ExtraLight.ttf' 'FiraGO-Thin.otf' 'sarasa-extralight.ttc(Sarasa UI SC Xlight)'
      fontforge ${build-script} 'ExtraLight' 1 'Zhudou Sans ExtraLight.ttf' 'FiraGO-ThinItalic.otf' 'sarasa-extralightitalic.ttc(Sarasa UI SC Xlight Italic)'
      fontforge ${build-script} 'Light' 0 'Zhudou Sans Light.ttf' 'FiraGO-Light.otf' 'sarasa-light.ttc(Sarasa UI SC Light)'
      fontforge ${build-script} 'Light' 1 'Zhudou Sans Light.ttf' 'FiraGO-LightItalic.otf' 'sarasa-lightitalic.ttc(Sarasa UI SC Light Italic)'
      fontforge ${build-script} 'Regular' 0 'Zhudou Sans Regular.ttf' 'FiraGO-Regular.otf' 'sarasa-regular.ttc(Sarasa UI SC)'
      fontforge ${build-script} 'Regular' 1 'Zhudou Sans Regular.ttf' 'FiraGO-Italic.otf' 'sarasa-italic.ttc(Sarasa UI SC Italic)'
      fontforge ${build-script} 'SemiBold' 0 'Zhudou Sans Bold.ttf' 'FiraGO-SemiBold.otf' 'sarasa-semibold.ttc(Sarasa UI SC Semibold)'
      fontforge ${build-script} 'SemiBold' 1 'Zhudou Sans Bold.ttf' 'FiraGO-SemiBoldItalic.otf' 'sarasa-semibolditalic.ttc(Sarasa UI SC Semibold Italic)'
      fontforge ${build-script} 'Bold' 0 'Zhudou Sans Bold.ttf' 'FiraGO-Bold.otf' 'sarasa-bold.ttc(Sarasa UI SC Bold)'
      fontforge ${build-script} 'Bold' 1 'Zhudou Sans Bold.ttf' 'FiraGO-BoldItalic.otf' 'sarasa-bolditalic.ttc(Sarasa UI SC Bold Italic)'
    '';

  installPhase = ''
    runHook preInstall
    install -Dm644 RedFish-*.otf -t $out/share/fonts/opentype/
    runHook postInstall
  '';
}
