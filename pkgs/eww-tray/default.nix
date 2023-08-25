{ lib, fetchFromGitHub, rustPlatform, pkg-config, gtk3, gdk-pixbuf, gtk-layer-shell, glib, librsvg, libdbusmenu-gtk3 }:

rustPlatform.buildRustPackage rec {
  pname = "eww-tray";
  version = "aae214f51f4c8d8129cd0b8dbd0e1c362c50ce27";

  src = fetchFromGitHub {
    owner = "ralismark";
    repo = "eww";
    rev = version;
    sha256 = "sha256-b/ipIavlmnEq4f1cQOrOCZRnIly3uXEgFbWiREKsh20=";
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
