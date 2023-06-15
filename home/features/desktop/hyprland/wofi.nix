{ config, pkgs, ... }:
let
  inherit (config.colorscheme) colors;
in
{
  programs.wofi = {
    enable = true;
    package = pkgs.wofi.overrideAttrs (oa: {
      patches = (oa.patches or [ ]) ++ [
        # Fix for https://todo.sr.ht/~scoopta/wofi/174
        ./wofi-run-shell.patch
      ];
    });
    style = ''
      * {
        font-family: "${config.fontProfiles.monospace.family}";
      }
      window {
        background-color: #${colors.base00};
        color: #${colors.base05};
      }

      #entry:nth-child(odd) {
        background-color: #${colors.base00};
      }

      #entry:nth-child(even) {
        background-color: #${colors.base01};
      }

      #entry:selected {
        background-color: #${colors.base02};
      }

      #entry:selected * {
        color: #${colors.base06};
      }

      #input {
        background-color: #${colors.base01};
        color: #${colors.base04};
        border-color: #${colors.base02};
      }

      #input:focus {
        border-color: #${colors.base0A};
      }
    '';
  };
}
