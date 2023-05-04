{ config, pkgs, inputs, ... }:

let
  inherit (inputs.nix-colors.lib-contrib { inherit pkgs; }) gtkThemeFromScheme;
in
{
  gtk = {
    enable = true;
    font = {
      name = config.fontProfiles.sans-serif.family;
      size = 11;
    };
    theme = {
      package = gtkThemeFromScheme { scheme = config.colorscheme; };
      name = "${config.colorscheme.slug}";
    };
    cursorTheme = {
      package = pkgs.bibata-cursors;
      name = "Bibata-Modern-Ice";
      size = 24;
    };
    iconTheme = {
      package = pkgs.tela-icon-theme;
      name = "Tela";
    };
  };

  services.xsettingsd = {
    enable = true;
    settings = {
      "Net/ThemeName" = "${config.gtk.theme.name}";
      "Net/IconThemeName" = "${config.gtk.iconTheme.name}";
    };
  };
}
