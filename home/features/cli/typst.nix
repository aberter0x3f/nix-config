{ pkgs, inputs, ... }: {
  nixpkgs.overlays = [
    inputs.typst.overlays.default
  ];

  home.packages = with pkgs; [
    typst-dev
    typst-lsp
  ];

  home.sessionVariables = {
    TYPST_FONT_PATHS = "/run/current-system/sw/share/X11/fonts";
  };
}
