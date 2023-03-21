{ lib, stdenvNoCC, fetchurl, ... }:

stdenvNoCC.mkDerivation rec {
  pname = "lxgw-fasmart-gothic";
  version = "1.006";

  src = fetchurl {
    url = "https://github.com/lxgw/LxgwNeoXiHei/releases/download/v${version}/LXGWFasmartGothic.ttf";
    hash = "sha256-IbJdf2QpO1bR3KtdXzNASQzxtvNhaG0AAeELu8L2EAo=";
  };

  unpackPhase = ''
    cp ${src} LXGWFasmartGothic.ttf
  '';

  installPhase = ''
    runHook preInstall
    install -Dm644 *.ttf -t $out/share/fonts/truetype/
    runHook postInstall
  '';

  meta = {
    description = "A Chinese sans-serif font derived from IPAex Gothic.";
    homepage = "https://github.com/lxgw/LxgwNeoXiHei";
    license = lib.licenses.ofl;
    platforms = lib.platforms.all;
  };
}
