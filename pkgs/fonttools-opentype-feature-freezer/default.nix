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
  src = ./.;
}
