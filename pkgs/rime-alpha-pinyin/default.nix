{
  stdenvNoCC,
  fetchFromGitHub,
}:

stdenvNoCC.mkDerivation (finalAttrs: {
  pname = "rime-alpha-pinyin";
  version = "c11db4b400b086651f458078dbde1d5fefe4966a";

  src = fetchFromGitHub {
    owner = "aberter0x3f";
    repo = "rime-alpha-pinyin";
    rev = finalAttrs.version;
    hash = "sha256-jW/BjSBQkEyUe0lAbtunMUI1oPpZXvDuFbgxHpSi+SQ=";
  };

  installPhase = ''
    runHook preInstall

    rm -rf .git* convert-pinyin-style.py shell.nix

    mkdir -p $out/share
    cp -r . $out/share/rime-data

    runHook postInstall
  '';
})
