{
  lib,
  fetchFromGitHub,
  nodejs,
  python3Packages,
  ttfautohint-nox,
  buildNpmPackage,
  importNpmLock,
}:

let
  version = "1.0.30";
  rev = "v${version}";
  sha256 = "sha256-LgW2vVtP3w3nwTBiLsRqSnnYXn9rUL7s4k9GDzE1Jjk=";
in
buildNpmPackage rec {
  pname = "sarasa-gothic";
  inherit version;

  src = fetchFromGitHub {
    owner = "be5invis";
    repo = "Sarasa-Gothic";
    inherit rev sha256;
  };

  patches = [
    ./config.patch
    ./verdafile.patch
  ];

  nativeBuildInputs = [
    nodejs
    python3Packages.afdko
    ttfautohint-nox
  ];

  npmDeps = importNpmLock {
    npmRoot = src;
  };

  npmConfigHook = importNpmLock.npmConfigHook;

  buildPhase = ''
    npm run build ttf
  '';

  installPhase = ''
    install -Dm644 out/TTF-Unhinted/*.ttf -t $out/share/fonts/truetype/
  '';

  meta = with lib; {
    description = "Sarasa Gothic - A CJK programming font based on Iosevka and Source Han Sans";
    homepage = "https://github.com/be5invis/Sarasa-Gothic";
    license = licenses.ofl;
    platforms = platforms.all;
  };
}
