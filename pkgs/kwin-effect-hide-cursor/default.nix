{
  lib,
  stdenv,
  cmake,
  extra-cmake-modules,
  kwin,
  wrapQtAppsHook,
  fetchFromGitHub,
  qttools,
}:
stdenv.mkDerivation rec {
  pname = "kwin-effect-hide-cursor";
  version = "0.1.0";

  src = fetchFromGitHub {
    owner = "jinliu";
    repo = "kwin-effect-hide-cursor";
    rev = "4fbf326f9b76614a8692e7a54d673f0ce9ff2453";
    sha256 = "sha256-HtEF7wVDjV9heQxC0feZJ8LyuU+qw0Hyj/uX7ueYh9k=";
  };

  nativeBuildInputs = [
    cmake
    extra-cmake-modules
    wrapQtAppsHook
  ];

  buildInputs = [
    kwin
    qttools
  ];

  meta = with lib; {
    description = " Hide mouse cursor on inactivity or typing";
    license = licenses.gpl2;
    homepage = "https://github.com/jinliu/kwin-effect-hide-cursor";
  };
}
