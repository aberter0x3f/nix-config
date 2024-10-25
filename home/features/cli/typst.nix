{ pkgs, ... }:
{
  home.packages = with pkgs; [
    typst
    # typst-lsp
  ];

  home.sessionVariables = {
    TYPST_FONT_PATHS = "/run/current-system/sw/share/X11/fonts";
  };
}
