{
  lib,
  fetchFromGitHub,
  rustPlatform,
}:
rustPlatform.buildRustPackage rec {
  pname = "cpt-fetcher";
  version = "5414f55d8c406b2b632d4fd6b673b39f9ba2fb05";
  owner = "aberter0x3f";

  src = fetchFromGitHub {
    owner = owner;
    repo = pname;
    rev = version;
    sha256 = "sha256-Gt7Co0N2QUVd+8YauJx6iBD5EKG4OSDSk5qTCaWlqhQ=";
  };

  cargoHash = "sha256-OKenlrVsnSi9J0wjRN1iCODW+9P/lYhZgOWKtPthf48=";

  meta = with lib; {
    description = "A bridge between Competitive Companion and cpt.";
    homepage = "https://github.com/${owner}/${pname}";
    license = licenses.asl20;
  };
}
