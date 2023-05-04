{ lib, stdenvNoCC, fetchurl }:

stdenvNoCC.mkDerivation rec {
  pname = "locale-en_xx";
  version = "2017";

  src = fetchurl {
    url = "https://xyne.dev/projects/locale-en_xx/src/locale-en_xx-${version}.tar.xz";
    hash = "sha256-tHnpczSat4jPuWe6G0Q12qouumXjlUMNb6rBKQvfIog=";
  };

  patches = [
    ./force-24h.patch
  ];

  installPhase = ''
    runHook preInstall
    install -Dm644 "en_XX@POSIX" "$out/share/i18n/locales/en_XX@POSIX"
    runHook postInstall
  '';

  meta = {
    description = "A mixed international English locale with ISO and POSIX formats for cosmopolitan coders.";
    homepage = "https://xyne.dev/projects/locale-en_xx";
    license = lib.licenses.gpl2;
  };
}
