{
  lib,
  fetchFromGitHub,
  nodejs,
  python3Packages,
  ttfautohint-nox,
  buildNpmPackage,
  importNpmLock,
  nerd-font-patcher,
}:

let
  version = "1.0.30";
  rev = "v${version}";
  sha256 = "sha256-LgW2vVtP3w3nwTBiLsRqSnnYXn9rUL7s4k9GDzE1Jjk=";
in
buildNpmPackage rec {
  pname = "sarasa-ubuntu-mono";
  inherit version;

  src = fetchFromGitHub {
    owner = "be5invis";
    repo = "Sarasa-Gothic";
    inherit rev sha256;
  };

  src-ubuntu = fetchFromGitHub {
    owner = "canonical";
    repo = "Ubuntu-Sans-Mono-fonts";
    rev = "v1.006";
    hash = "sha256-EFZZnMZTQHo2Tr9/rtb7C5gAlQ/0uYT+MQ1gKkqQ5hE=";
  };

  patches = [
    ./config.patch
    ./verdafile.patch
  ];

  nativeBuildInputs = [
    nodejs
    python3Packages.afdko
    ttfautohint-nox
    nerd-font-patcher
  ];

  npmDeps = importNpmLock {
    npmRoot = src;
  };

  npmConfigHook = importNpmLock.npmConfigHook;

  buildPhase = ''
    runHook preBuild

    ln -s ${src-ubuntu}/fonts/ttf sources/UbuntuSansMono
    npm run build ttf

    mkdir out/TTF-Patched
    for font in out/TTF-Unhinted/*.ttf; do
      nerd-font-patcher -c -l -out out/TTF-Patched "$font" &
    done
    wait

    runHook postBuild
  '';

  installPhase = ''
    runHook preInstall
    install -Dm644 out/TTF-Patched/*.ttf -t $out/share/fonts/truetype/
    runHook postInstall
  '';

  meta = with lib; {
    description = "A fusion of Sarasa Gothic and Ubuntu Sans Mono";
    license = licenses.ofl;
    platforms = platforms.all;
  };
}
