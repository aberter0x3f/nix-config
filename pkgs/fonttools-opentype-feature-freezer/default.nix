{ lib
, pkgs
, poetry2nix
, python3
, fetchFromGitHub
, projectDir ? ./.
, pyproject ? projectDir + "/pyproject.toml"
, poetrylock ? projectDir + "/poetry.lock"
}:

poetry2nix.mkPoetryApplication {
  inherit projectDir pyproject poetrylock;
  python = python3;
  src = fetchFromGitHub {
    owner = "twardoch";
    repo = "fonttools-opentype-feature-freezer";
    rev = "2ae16853bc724c3e377726f81d9fc661d3445827";
    sha256 = "sha256-mIWQF9LTVKxIkwHLCTVK1cOuiaduJyX8pyBZ/0RKIVE=";
  };
}
