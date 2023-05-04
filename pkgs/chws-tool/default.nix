{ lib
, pkgs
, poetry2nix
, python3
, fetchFromGitHub
, projectDir ? ./.
, pyproject ? projectDir + "/pyproject.toml"
, poetrylock ? projectDir + "/poetry.lock"
}:

poetry2nix.mkPoetryApplication rec {
  inherit projectDir pyproject poetrylock;
  python = python3;

  src = fetchFromGitHub {
    owner = "googlefonts";
    repo = "chws_tool";
    rev = "v1.4.1";
    sha256 = "sha256-nn18permnxa9SMaKeA9xaMc3gZ/Xc2FwVgvNzKPmDhM=";
  };

  overrides = poetry2nix.defaultPoetryOverrides.extend
    (self: super: {
      east-asian-spacing = super.east-asian-spacing.overridePythonAttrs
        (
          old: {
            buildInputs = (old.buildInputs or [ ]) ++ [ super.poetry ];
          }
        );
    });
}
