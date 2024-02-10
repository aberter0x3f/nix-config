{ stdenv
, fetchurl
, lib
, autoPatchelfHook
, zlib
, ncurses
, libgcc
, ...
} @ args:

stdenv.mkDerivation rec {
  pname = "hyde";
  version = "2.0.0";
  src = fetchurl {
    url = "https://github.com/adobe/hyde/releases/download/v${version}/hyde-v${version}-linux-X64.tgz";
    sha256 = "sha256-X0fZELFF4B3UrFefNN5f+9mODgWiaRCncipzNfxp1WE=";
  };

  unpackPhase = ''
    tar xf ${src}
    mkdir bin/
    mv hyde bin/
  '';

  nativeBuildInputs = [ autoPatchelfHook ];
  buildInputs = [
    zlib
    ncurses
    libgcc.lib
  ];

  installPhase = ''
    mkdir -p $out/bin
    install -Dm755 bin/hyde $out/bin
  '';
}
