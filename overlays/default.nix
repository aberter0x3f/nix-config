# This file defines overlays
{ inputs, ... }:
{
  # This one brings our custom packages from the 'pkgs' directory
  additions = final: _prev: import ../pkgs { pkgs = final; inherit inputs; };

  # This one contains whatever you want to overlay
  # You can change versions, add patches, set compilation flags, anything really.
  # https://nixos.wiki/wiki/Overlays
  modifications = final: prev: {
    glibcLocalesWithEnXX = prev.glibcLocales.overrideAttrs
      (oldAttrs: {
        patchPhase = ''
          echo 'en_XX.UTF-8@POSIX/UTF-8 \' >> ../glibc-2*/localedata/SUPPORTED
          for i in ../glibc-2*/localedata/locales
          do
            ln -s "${prev.locale-en_xx}/share/i18n/locales/en_XX@POSIX" "$i/en_XX@POSIX"
          done
        '';
      });
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
