{ pkgs, ... }:
{
  gtk = {
    iconTheme = {
      package = pkgs.tela-icon-theme;
      name = "Tela-nord-dark";
    };
  };

  dconf.settings = {
    "org/gnome/desktop/interface" = {
      color-scheme = "prefer-dark";
    };
  };

  stylix.targets = {
    gnome = {
      enable = true;
      useWallpaper = false;
    };
    gnome-text-editor.enable = true;
    gtk.enable = true;
    xresources.enable = true;
  };
}
