{
  lib,
  stdenv,
  fetchFromGitHub,
  cmake,
  qt6,
  bubblewrap,
  bash,
  diffutils,
  wrapGAppsHook,
}:

let
  version = "8ceb3d5a2cbc3401ed1c21a1d9dd32374c30f8e0";
in
stdenv.mkDerivation (finalAttrs: {
  pname = "project-lemonlime";
  inherit version;

  src = fetchFromGitHub {
    owner = "aberter0x3f";
    repo = "Project_LemonLime";
    rev = version;
    hash = "sha256-RMMEIwshmpVl7R8pznZYCDDBx7NFlL9sbVjF1rIoZOk=";
    fetchSubmodules = true;
  };

  nativeBuildInputs = [
    cmake
    qt6.wrapQtAppsHook
    wrapGAppsHook
  ];

  patches = [
    ./0001-Bind-Nix-Store.patch
  ];

  postPatch = ''
    substituteInPlace src/core/judgingthread.cpp \
      --replace-fail "/usr/bin/bwrap" "${lib.getExe bubblewrap}"
    substituteInPlace unix/watcher_unix.cpp \
      --replace-fail "bash" "${lib.getExe bash}"
    substituteInPlace src/base/settings.cpp \
      --replace-fail "/usr/bin/diff" "${diffutils}/bin/diff"
  '';

  cmakeFlags = [
    (lib.cmakeBool "LEMON_QT6" true)
  ];

  buildInputs = [
    qt6.qtbase
    qt6.qttools
    qt6.qtwayland
  ];

  meta = {
    description = "Lightweight evaluation system based on Lemon + LemonPlus for OI competitions";
    homepage = "https://github.com/Project-LemonLime/Project_LemonLime";
    changelog = "https://github.com/Project-LemonLime/Project_LemonLime/releases/tag/${finalAttrs.version}";
    license = lib.licenses.gpl3Only;
    maintainers = with lib.maintainers; [
      sigmanificient
      bot-wxt1221
    ];
    platforms = lib.platforms.unix;
    mainProgram = "lemon";
  };
})
