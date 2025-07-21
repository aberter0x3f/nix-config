{
  stdenvNoCC,
  fetchFromGitHub,
}:

stdenvNoCC.mkDerivation (finalAttrs: {
  pname = "rime-alpha-pinyin";
  version = "e6171152d11c997d9117382a4bbcfa5b8e5ce600";

  src = fetchFromGitHub {
    owner = "aberter0x3f";
    repo = "rime-alpha-pinyin";
    rev = finalAttrs.version;
    hash = "sha256-qeEaZryfT/WOkB1l2er90Zz8/ZMrTTBra5xmeE17Gzk=";
  };

  installPhase = ''
    runHook preInstall

    rm -rf .git* convert-pinyin-style.py shell.nix

    mkdir -p $out/share
    cp -r . $out/share/rime-data

    runHook postInstall
  '';
})
