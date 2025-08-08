{
  stdenvNoCC,
  fetchFromGitHub,
}:

stdenvNoCC.mkDerivation (finalAttrs: {
  pname = "rime-alpha-pinyin";
  version = "8bbbba49ee6b9c43b3eb9075d72a7bf6c731d29b";

  src = fetchFromGitHub {
    owner = "aberter0x3f";
    repo = "rime-alpha-pinyin";
    rev = finalAttrs.version;
    hash = "sha256-55ZSGpXwpgBhx4tBfcd5oj+mjEC+HiU3foOTgKY+4NM=";
  };

  installPhase = ''
    runHook preInstall

    rm -rf .git* convert-pinyin-style.py shell.nix

    mkdir -p $out/share
    cp -r . $out/share/rime-data

    runHook postInstall
  '';
})
