{ lib
, stdenv
, fetchFromGitHub
, fetchurl
, cmake
, ninja
, go
, zxing-cpp
, protobuf
, yaml-cpp
, qtbase
, qtsvg
, qttools
, qtx11extras
, wrapQtAppsHook
, unzip
, makeDesktopItem
, v2ray-geoip
, v2ray-domain-list-community
, ...
}:

let
  desktopItem = makeDesktopItem {
    name = "nekoray";
    desktopName = "NekoRay";
    comment = "Qt based cross-platform GUI proxy configuration manager (backend: v2ray / sing-box)";
    icon = "nekoray";
    exec = "nekoray";
    categories = [ "Network" ];
  };
in
stdenv.mkDerivation rec {
  pname = "nekoray";
  version = "3.8";

  src = fetchFromGitHub ({
    owner = "MatsuriDayo";
    repo = pname;
    rev = version;
    fetchSubmodules = true;
    sha256 = "sha256-4V42UIAV/9IwIwEeBuWyXBRGGluLCisJsxkBj/n/MHk=";
  });

  src-bin = fetchurl ({
    url = "https://github.com/MatsuriDayo/nekoray/releases/download/3.8/nekoray-3.8-2023-06-14-linux64.zip";
    hash = "sha256-9NUu6k+yemS+nT+7ACybx2es0uCV0E0eHadMV0Qd/J8=";
  });

  enableParallelBuilding = true;

  nativeBuildInputs = [ cmake ninja go zxing-cpp wrapQtAppsHook unzip ];

  buildInputs = [ protobuf yaml-cpp qtbase qtsvg qttools qtx11extras ];

  postUnpack = ''
    unzip ${src-bin} -d nekoray-bin
  '';

  preBuild = ''
    NIX_CFLAGS_COMPILE="-DZX_USE_UTF8 $NIX_CFLAGS_COMPILE"
  '';

  installPhase = ''
    mkdir -p "$out/lib/nekoray"
    mkdir -p "$out/bin"
    mkdir -p "$out/share/pixmaps"
    mkdir -p "$out/share/applications"
    install -D "${desktopItem}/share/applications/"* \
      --target-directory="$out/share/applications/"
    cp -a "../res/public/nekoray.png" "$out/lib/nekoray/"
    cp -a "../res/public/nekobox.png" "$out/lib/nekoray/"
    ln -s "$out/lib/nekoray/nekoray.png" "$out/share/pixmaps/nekoray.png"
    ln -s "$out/lib/nekoray/nekobox.png" "$out/share/pixmaps/nekobox.png"
    # core
    cp -a "../../nekoray-bin/nekoray/nekoray_core" "$out/lib/nekoray/"
    cp -a "../../nekoray-bin/nekoray/nekobox_core" "$out/lib/nekoray/"
    # app
    cp -a "nekoray" "$out/lib/nekoray/"
    ln -s "$out/lib/nekoray/nekoray" "$out/bin/nekoray"
    # v2ray dat
    install -m 0644 ${v2ray-geoip}/share/v2ray/geoip.dat -D $out/lib/nekoray/geoip.dat
    install -m 0644 ${v2ray-domain-list-community}/share/v2ray/geosite.dat -D $out/lib/nekoray/geosite.dat
  '';

  cmakeFlags = [
    "-DQT_VERSION_MAJOR=5"
    "-DNKR_PACKAGE=ON"
  ];
}
