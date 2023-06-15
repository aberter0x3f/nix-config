{ lib, fetchFromGitHub, rustPlatform, pkg-config, gtk3, gdk-pixbuf, gtk-layer-shell, glib, librsvg, libdbusmenu-gtk3 }:

rustPlatform.buildRustPackage rec {
  pname = "eww-tray";
  version = "46b3fbb2df1d8c4a3be6c2e66ef5ed4a8bd6fd6d";

  src = fetchFromGitHub {
    owner = "ralismark";
    repo = "eww";
    rev = version;
    sha256 = "sha256-GbRAJdKfMl9EwpV+lgn1etXzjlhUR8FhACTAXUlXq4k=";
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
