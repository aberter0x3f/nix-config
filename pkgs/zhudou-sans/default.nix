{ lib, stdenvNoCC, fetchurl }:

stdenvNoCC.mkDerivation rec {
  pname = "zhudou-sans";
  version = "1.000";

  src = fetchurl {
    url = "https://github.com/Buernia/Zhudou-Sans/releases/download/v${version}/Zhudou.Sans-VF.ttf";
    hash = "sha256-7mK5e2ymB1GVaCk3PdXMa5JF3kXARbg1msZAnA9f6+E=";
  };

  unpackPhase = ''
    cp ${src} Zhudou.Sans-VF.ttf
  '';

  installPhase = ''
    runHook preInstall
    install -Dm644 *.ttf -t $out/share/fonts/
    runHook postInstall
  '';

  meta = {
    description = "A font family for CJK symbols and punctuation, derived from Noto Sans.";
    homepage = "https://github.com/Buernia/Zhudou-Sans";
    license = lib.licenses.ofl;
    platforms = lib.platforms.all;
  };
}
