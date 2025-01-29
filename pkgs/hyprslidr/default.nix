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
  version = "7e3059d5fc536aa4616e125b0818d6fc971690e0";

  src = fetchFromGitea {
    domain = "codeberg.org";
    owner = "aberter0x3f";
    repo = pluginName;
    rev = version;
    hash = "sha256-MFH2ZkpYNIleL1GerrM2K2EtjjR+dbU+Q2FOYEcDm3s=";
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
