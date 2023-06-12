{ lib, stdenvNoCC, fetchurl }:

stdenvNoCC.mkDerivation rec {
  pname = "lxgw-wenkai-gb-fusion";
  version = "1.000";

  src-bold = fetchurl {
    url = "https://github.com/lxgw/LxgwWenkaiGB-Fusion/releases/download/v${version}/LXGWWenKaiGBFusion-Bold.ttf";
    hash = "sha256-K68cKt/Z8lNy9RqCPm38C9fXBQV4VSX/nU+h5LXS/zE=";
  };

  src-light = fetchurl {
    url = "https://github.com/lxgw/LxgwWenkaiGB-Fusion/releases/download/v${version}/LXGWWenKaiGBFusion-Light.ttf";
    hash = "sha256-5RIGVAQQ6N3y8yjPs7g03ZBhYPXjnXqQsmb/ZRbVmTY=";
    name = "src-light";
  };

  src-regular = fetchurl {
    url = "https://github.com/lxgw/LxgwWenkaiGB-Fusion/releases/download/v${version}/LXGWWenKaiGBFusion-Regular.ttf";
    hash = "sha256-op8RNCwBxOl+3JBtycJcyvB12WyYS6n5FrmU0a6WsXM=";
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
    install -Dm644 *.ttf -t $out/share/fonts/truetype/
    runHook postInstall
  '';

  meta = {
    description = "An open-source Chinese font derived from Fontworks' Klee One.";
    homepage = "https://github.com/lxgw/LxgwWenkaiGB-Fusion";
    license = lib.licenses.ofl;
    platforms = lib.platforms.all;
  };
}
