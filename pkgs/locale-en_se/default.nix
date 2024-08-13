{ lib, stdenvNoCC, fetchFromGitHub }:

stdenvNoCC.mkDerivation rec {
  pname = "locale-en_se";
  version = "0.2.0";

  src = fetchFromGitHub {
    owner = "u296";
    repo = "en_SE";
    rev = "v${version}";
    hash = "sha256-gNAK+WOAAAAAAAAAAAAAAAAerNlMIx7cqG1wV9iLS5s=";
  };

  installPhase = ''
    runHook preInstall
    install -Dm644 "en_SE" "$out/share/i18n/locales/en_SE"
    runHook postInstall
  '';

  meta = {
    description = " en_SE locale for linux";
    homepage = "https://github.com/u296/en_SE";
  };
}
