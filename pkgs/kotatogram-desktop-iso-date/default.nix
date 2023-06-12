{ stdenv, lib, kotatogram-desktop, makeWrapper }:

stdenv.mkDerivation {
  pname = "${kotatogram-desktop.pname}-iso-date";
  version = kotatogram-desktop.version;
  nativeBuildInputs = [ makeWrapper ];
  dontUnpack = true;
  installPhase = ''
    mkdir -p $out
    cp -r ${kotatogram-desktop}/share $out
  '';
  postFixup = ''
    mkdir -p $out/bin
    makeWrapper ${kotatogram-desktop}/bin/kotatogram-desktop $out/bin/kotatogram-desktop \
      --prefix LC_TIME : lt_LT.UTF-8
  '';
  meta = kotatogram-desktop.meta // {
    platforms = lib.platforms.linux;
  };
}
