{
  fetchFromGitHub,
  hyprland,
  hyprlandPlugins,
  lib,
  cmake,
  ...
}:

hyprlandPlugins.mkHyprlandPlugin hyprland rec {
  pluginName = "hyprscroller";
  version = "44431f30678fcfb483bc49be65eff663192a0c20";

  src = fetchFromGitHub {
    owner = "dawsers";
    repo = "hyprscroller";
    rev = version;
    hash = "sha256-9UA/JXR6SW4F+lu0R3W6SnT4GV6TVNV7/G64VvkJ5tg=";
  };

  nativeBuildInputs = [ cmake ];

  installPhase = ''
    runHook preInstall

    mkdir -p $out/lib
    mv hyprscroller.so $out/lib/libhyprscroller.so

    runHook postInstall
  '';

  meta = {
    homepage = "https://github.com/dawsers/hyprscroller";
    description = "Hyprland layout plugin providing a scrolling layout like PaperWM";
    license = lib.licenses.mit;
    maintainers = with lib.maintainers; [ donovanglover ];
    platforms = lib.platforms.linux;
  };
}
