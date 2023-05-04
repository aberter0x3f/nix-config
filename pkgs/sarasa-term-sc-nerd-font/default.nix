{ lib, stdenvNoCC, fetchurl, pkgs }:

stdenvNoCC.mkDerivation rec {
  pname = "sarasa-term-sc-nerd-font";
  version = "0.40.6-0";

  src = fetchurl {
    url = "https://github.com/jonz94/Sarasa-Gothic-Nerd-Fonts/releases/download/v${version}/sarasa-term-sc-nerd-font.zip";
    hash = "sha256-0M6gKLjE86WQ5rz0oTFuD4exDyFWkbGNbb6KFiK3MA4=";
  };

  nativeBuildInputs = with pkgs; [ unzip ];

  unpackPhase = ''
    unzip $src
  '';

  installPhase = ''
    runHook preInstall
    install -Dm644 *.ttf -t $out/share/fonts/truetype/
    runHook postInstall
  '';

  meta = {
    description = "Nerd fonts patched Sarasa Gothic font.";
    homepage = "https://github.com/jonz94/Sarasa-Gothic-Nerd-Fonts";
    license = lib.licenses.ofl;
    platforms = lib.platforms.all;
  };
}
