{ lib
, pkgs
, inputs
, python3
, fetchFromGitHub
, projectDir ? ./.
, pyproject ? projectDir + "/pyproject.toml"
, poetrylock ? projectDir + "/poetry.lock"
}:

let
  poetry2nix = (inputs.poetry2nix.lib.mkPoetry2Nix { inherit pkgs; });
in
poetry2nix.mkPoetryApplication {
  inherit projectDir pyproject poetrylock;
  python = python3;
  src = ./.;
}
