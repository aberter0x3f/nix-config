{ lib, stdenvNoCC, fetchurl, ... }:

stdenvNoCC.mkDerivation rec {
  pname = "fusion-kai";
  version = "3.164";

  src = fetchurl {
    url = "https://github.com/lxgw/FusionKai/archive/refs/tags/v${version}.tar.gz";
    hash = "sha256-XVs5XguqsexYYAi4vb8sxIZUgVfMtYT0f7FoI+0Q2eo=";
  };

  installPhase = ''
    runHook preInstall
    install -Dm644 FusionKaiG-Regular.ttf -t $out/share/fonts/
    runHook postInstall
  '';

  meta = {
    description = "An open-source Simplified Chinese font derived from Klee One. ";
    homepage = "https://github.com/lxgw/FusionKai";
    license = lib.licenses.ofl;
    platforms = lib.platforms.all;
  };
}
