{ stdenv
, fetchurl
, lib
, autoPatchelfHook
, ...
} @ args:

stdenv.mkDerivation rec {
  pname = "mireu";
  version = "3.2.0";
  src = fetchurl {
    url = "https://github.com/enfein/mieru/releases/download/v${version}/mieru_${version}_linux_amd64.tar.gz";
    sha256 = "sha256-ScoJ45xN8ocwrGgWLs19/yLAV/uHocrWsKB9RM7MJnc=";
  };

  unpackPhase = ''
    tar xf ${src}
    mkdir bin/
    mv mieru bin/
  '';

  nativeBuildInputs = [ autoPatchelfHook ];
  buildInputs = [
  ];

  installPhase = ''
    mkdir -p $out/bin
    install -Dm755 bin/mieru $out/bin
  '';
}
