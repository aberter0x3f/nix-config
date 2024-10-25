{ pkgs, ... }:
{
  stylix.targets.gtk = {
    enable = true;
    extraCss = ''
      .titlebar,
      .titlebar .background,
      decoration,
      window,
      window.background {
        border-radius: 0;
      }

      decoration, decoration:backdrop {
        box-shadow: none;
      }

      /* Always use background color */
      GtkWindow {
        background-color: @theme_bg_color;
      }

      /* Fix tooltip background override */
      .tooltip {
        background-color: rgba(0, 0, 0, 0.8);
      }

      .tooltip * {
        background-color: transparent;
      }

      /* Fix Nautilus desktop window background override */
      NautilusWindow {
        background-color: transparent;
      }
    '';
  };

  stylix.targets.xresources.enable = true;

  gtk = {
    iconTheme = {
      package = pkgs.tela-icon-theme;
      name = "Tela-nord-dark";
    };
  };

  dconf = {
    enable = true;
    settings = {
      "org/gnome/desktop/interface" = {
        color-scheme = "prefer-dark";
      };
    };
  };
}
