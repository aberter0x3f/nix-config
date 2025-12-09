# This file defines overlays
{ inputs, ... }:
{
  # This one brings our custom packages from the 'pkgs' directory
  additions =
    final: _prev:
    import ../pkgs {
      pkgs = final;
      inherit inputs;
    };

  # This one contains whatever you want to overlay
  # You can change versions, add patches, set compilation flags, anything really.
  # https://nixos.wiki/wiki/Overlays
  modifications = final: prev: {
    unstable = import inputs.nixpkgs-unstable {
      system = prev.system;
    };

    pkgsi686Linux = prev.pkgsi686Linux // {
      libsecret = prev.pkgsi686Linux.libsecret.overrideAttrs (old: {
        doCheck = false;
        nativeCheckInputs = [ ];
      });
    };

    # https://github.com/NixOS/nixpkgs/issues/463367
    llvmPackages = prev.llvmPackages // {
      clang-tools = prev.llvmPackages.clang-tools.overrideAttrs (
        old:
        prev.lib.optionalAttrs (prev.lib.versionOlder old.version "21.1.2.bug") {
          installPhase = old.installPhase + ''
            substituteInPlace $out/bin/clangd --replace-fail "-isystem)" "-isystem|-cxx-isystem)"
          '';
        }
      );
    };
  };
}
