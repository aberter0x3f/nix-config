{ lib, fetchFromGitHub, rustPlatform, pkg-config, gtk3, gdk-pixbuf, gtk-layer-shell, glib, librsvg, libdbusmenu-gtk3 }:

rustPlatform.buildRustPackage rec {
  pname = "eww-tray";
  version = "a82ed62c25ba50f28dc8c3d57efe440d51d6136b";

  src = fetchFromGitHub {
    owner = "ralismark";
    repo = "eww";
    rev = version;
    sha256 = "sha256-vxMGAa/RTsMADPK4dM/28SV2ktCT0DenYvGsHZ4IJ8c=";
  };

  cargoLock = {
    lockFile = src + "/Cargo.lock";
  };

  nativeBuildInputs = [ pkg-config ];

  buildInputs = [ gtk3 gdk-pixbuf gtk-layer-shell glib librsvg libdbusmenu-gtk3 ];

  cargoBuildFlags = [ "--bin" "eww" ];

  cargoTestFlags = cargoBuildFlags;

  buildNoDefaultFeatures = true;
  buildFeatures = "wayland";

  # requires unstable rust features
  RUSTC_BOOTSTRAP = 1;
}
