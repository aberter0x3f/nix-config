{ lib
, stdenv
, autoPatchelfHook
, fetchurl
, gcc-unwrapped
, ...
}:

stdenv.mkDerivation rec {
  pname = "naiveproxy";
  version = "114.0.5735.91-3";

  src = fetchurl ({
    url = "https://github.com/klzgrad/naiveproxy/releases/download/v${version}/naiveproxy-v${version}-linux-x64.tar.xz";
    hash = "sha256-EJ5MkfmLBmVgaT5UluLvulEjMdTSAXoz3wg/ieF1Bsk=";
  });

  enableParallelBuilding = true;

  nativeBuildInputs = [ autoPatchelfHook ];

  buildInputs = [ gcc-unwrapped.lib ];

  installPhase = ''
    mkdir -p "$out/bin"
    install -m 0755 "naive" --target-directory="$out/bin/"
  '';
}
