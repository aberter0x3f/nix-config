{ lib, stdenv, fetchurl, pkgs, mach-nix, ... }:

stdenv.mkDerivation rec {
  pname = "redfish-sans";
  version = "1.000";

  nativeBuildInputs = with pkgs; [
    unzip
    (mach-nix.lib."${system}".mkPython
      {
        requirements = ''
          chws-tool
          fontforge
        '';
      })
  ];

  src = ./src;

  patchPhase = ''
    ln -s ${pkgs.sarasa-gothic}/share/fonts/truetype/*.ttc .
  '';

  installPhase = ''
    runHook preInstall
    install -Dm644 RedFishSans*.otf -t $out/share/fonts/opentype/
    runHook postInstall
  '';
}
