{ lib, stdenvNoCC, fetchurl, ... }:

stdenvNoCC.mkDerivation rec {
  pname = "lxgw-wenkai-gb-fusion";
  version = "0.972";

  src-bold = fetchurl {
    url = "https://github.com/lxgw/LxgwWenkaiGB-Fusion/releases/download/v${version}/LXGWWenKaiGBFusion-Bold.ttf";
    hash = "sha256-hF6hOYHDIjjGqaheO5whYW1+MkDmcwRwsvVZC1O9peE=";
  };

  src-light = fetchurl {
    url = "https://github.com/lxgw/LxgwWenkaiGB-Fusion/releases/download/v${version}/LXGWWenKaiGBFusion-Light.ttf";
    hash = "sha256-87YhbyeQN7N9nWqomVccWMqtsmZyzAK9ae3vchGdyIQ=";
    name = "src-light";
  };

  src-regular = fetchurl {
    url = "https://github.com/lxgw/LxgwWenkaiGB-Fusion/releases/download/v${version}/LXGWWenKaiGBFusion-Regular.ttf";
    hash = "sha256-Az6m8wvRBatFa7CzPGtm5/4G9SIXqzSahKU8+ME1AU0=";
    name = "src-regular";
  };

  unpackPhase = ''
    runHook preUnpack
    cp "${src-bold}" LXGWWenKaiGBFusion-Bold.ttf
    cp "${src-light}" LXGWWenKaiGBFusion-Light.ttf
    cp "${src-regular}" LXGWWenKaiGBFusion-Regular.ttf
    runHook postUnpack
  '';

  installPhase = ''
    runHook preInstall
    install -Dm644 *.ttf -t $out/share/fonts/
    runHook postInstall
  '';

  meta = {
    description = "An open-source Chinese font derived from Fontworks' Klee One.";
    homepage = "https://github.com/lxgw/LxgwWenkaiGB-Fusion";
    license = lib.licenses.ofl;
    platforms = lib.platforms.all;
  };
}
