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
    # bash-env-json = unstable.bash-env-json;
    # glibcLocalesCustom = prev.glibcLocales.overrideAttrs (oldAttrs: {
    #   patchPhase = ''
    #     echo 'en_XX.UTF-8@POSIX/UTF-8 \' >> ../glibc-2*/localedata/SUPPORTED
    #     for i in ../glibc-2*/localedata/locales
    #     do
    #       ln -s "${prev.locale-en_xx}/share/i18n/locales/en_XX@POSIX" "$i/en_XX@POSIX"
    #     done
    #   '';
    # });
    # _64gram = prev._64gram.overrideAttrs (oldAttrs: rec {
    #   version = "1.1.43";
    #   src = prev.fetchFromGitHub {
    #     owner = "TDesktop-x64";
    #     repo = "tdesktop";
    #     rev = "v${version}";
    #
    #     fetchSubmodules = true;
    #     hash = "sha256-vRiAIGY3CU5+hsdn8xiNbgvSM3eGRVwnvsSmSoaDN/k=";
    #   };
    # });
    # amdvlk = prev.amdvlk.overrideAttrs
    #   (oldAttrs: rec {
    #     version = "2023.Q3.3";
    #     src = prev.fetchRepoProject {
    #       name = "${oldAttrs.pname}-src";
    #       manifest = "https://github.com/GPUOpen-Drivers/AMDVLK.git";
    #       rev = "refs/tags/v-${version}";
    #       sha256 = "HHnMiU6mzhUSicXev53PP8y9ealtDMavJLp2F/JAWhI=";
    #     };
    #   });
  };
}
