{
  fetchFromGitea,
  hyprland,
  hyprlandPlugins,
  lib,
  cmake,
  ...
}:

hyprlandPlugins.mkHyprlandPlugin hyprland rec {
  pluginName = "hyprslidr";
  version = "e737bf49e3c372f4678345b6803ad3a710b9e217";

  src = fetchFromGitea {
    domain = "codeberg.org";
    owner = "aberter0x3f";
    repo = pluginName;
    rev = version;
    hash = "sha256-RIGgyFNCmyOQV8bGZB8AEP1USUGuL+s4vGI+pLHi8i0=";
  };

  nativeBuildInputs = [ cmake ];

  buildInputs = [ ];

  installPhase = ''
    runHook preInstall
    mkdir -p $out/lib/
    install -T hyprslidr.so $out/lib/libhyprslidr.so
    runHook postInstall
  '';

  meta = with lib; {
    homepage = "https://gitlab.com/magus/hyprslidr";
    description = "A Hyprland plugin for a sliding window layout. Inspired by PaperWM.";
    license = licenses.bsd3;
    platforms = platforms.linux;
  };
}
