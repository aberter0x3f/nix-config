{ lib, stdenvNoCC, fetchurl, unzip, ... }:

stdenvNoCC.mkDerivation rec {
  pname = "noto-sans-sc";
  version = "2.004";

  nativeBuildInputs = [ unzip ];

  src = fetchurl {
    url = "https://github.com/notofonts/noto-cjk/releases/download/Sans${version}/18_NotoSansSC.zip";
    hash = "sha256-TRB8Ca2kedPki254yDg1dzy9khS/bhLNt7YPjgaCkuw=";
  };

  unpackPhase = ''
    unzip $src
  '';

  installPhase = ''
    runHook preInstall
    install -Dm644 *.otf -t $out/share/fonts/
    runHook postInstall
  '';

  meta = {
    description = "Noto CJK fonts.";
    homepage = "https://github.com/notofonts/noto-cjk";
    license = lib.licenses.ofl;
    platforms = lib.platforms.all;
  };
}
