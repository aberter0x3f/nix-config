{ lib, fetchFromGitHub, rustPlatform, pkg-config, gtk3, gdk-pixbuf, gtk-layer-shell, glib, librsvg, libdbusmenu-gtk3 }:

rustPlatform.buildRustPackage rec {
  pname = "eww-tray";
  version = "5b507c813c79be42b174f477b7acd2c95d58f09f";

  src = fetchFromGitHub {
    owner = "ralismark";
    repo = "eww";
    rev = version;
    sha256 = "sha256-oTxEbleVjtagYqFAb0rcoqvDcYcmiTgKCF9mk11ztSo=";
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
