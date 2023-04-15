# This file defines overlays
{ inputs, ... }:
{
  # This one brings our custom packages from the 'pkgs' directory
  additions = final: _prev: import ../pkgs { pkgs = final; };

  # This one contains whatever you want to overlay
  # You can change versions, add patches, set compilation flags, anything really.
  # https://nixos.wiki/wiki/Overlays
  modifications = final: prev: {
    glibcLocalesWithEnXX = final.glibcLocales.overrideAttrs
      (oldAttrs: {
        buildPhase =
          (''
            echo 'en_XX.UTF-8@POSIX/UTF-8 \' >> ../glibc-2*/localedata/SUPPORTED
            for i in ../glibc-2*/localedata/locales
            do
              ln -s "${prev.locale-en_xx}/share/i18n/locales/en_XX@POSIX" "$i/en_XX@POSIX"
            done
          '' + oldAttrs.buildPhase
          );
      });
    # example = prev.example.overrideAttrs (oldAttrs: rec {
    # ...
    # });
  };
}
