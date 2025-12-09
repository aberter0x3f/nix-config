{ pkgs, ... }:
{
  home.packages = with pkgs; [
    typst
    tinymist
    typstyle
  ];

  home.sessionVariables = {
    TYPST_FONT_PATHS = "/run/current-system/sw/share/X11/fonts";
  };
}
