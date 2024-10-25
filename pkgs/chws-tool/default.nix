{
  lib,
  pkgs,
  inputs,
  python3,
  fetchFromGitHub,
  projectDir ? ./.,
  pyproject ? projectDir + "/pyproject.toml",
  poetrylock ? projectDir + "/poetry.lock",
}:
let
  poetry2nix = inputs.poetry2nix.lib.mkPoetry2Nix { inherit pkgs; };
in
poetry2nix.mkPoetryApplication rec {
  inherit projectDir pyproject poetrylock;
  python = python3;

  src = fetchFromGitHub {
    owner = "googlefonts";
    repo = "chws_tool";
    rev = "v1.4.1";
    sha256 = "sha256-nn18permnxa9SMaKeA9xaMc3gZ/Xc2FwVgvNzKPmDhM=";
  };

  overrides = poetry2nix.defaultPoetryOverrides.extend (
    self: super: {
      east-asian-spacing = super.east-asian-spacing.overridePythonAttrs (old: {
        buildInputs = (old.buildInputs or [ ]) ++ [ super.poetry ];
      });
    }
  );
}
