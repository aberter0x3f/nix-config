{ lib, fetchFromGitHub, rustPlatform, pkg-config, gtk3, gdk-pixbuf, gtk-layer-shell, glib, librsvg, libdbusmenu-gtk3 }:

rustPlatform.buildRustPackage rec {
  pname = "eww-tray";
  version = "94309f96cbf78077fc50fb813c9e4c38e8faf072";

  src = fetchFromGitHub {
    owner = "ralismark";
    repo = "eww";
    rev = version;
    sha256 = "sha256-uJF9+p894xXk+19p+yhkDNnEgT6KYhQYkISgebsJXok=";
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
