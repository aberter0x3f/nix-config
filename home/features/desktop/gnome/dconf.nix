{ pkgs, lib, ... }:
{
  dconf.enable = true;
  dconf.settings = with lib.hm.gvariant; {
    "org/gnome/desktop/session" = {
      idle-delay = mkUint32 0;
    };
    "org/gnome/settings-daemon/plugins/media-keys" = {
      volume-step = 5;
      custom-keybindings = [
        "/org/gnome/settings-daemon/plugins/media-keys/custom-keybindings/custom0/"
        "/org/gnome/settings-daemon/plugins/media-keys/custom-keybindings/custom1/"
      ];
    };
    "org/gnome/settings-daemon/plugins/power" = {
      sleep-inactive-ac-type = "nothing";
    };
    "org/gnome/settings-daemon/plugins/media-keys/custom-keybindings/custom0" = {
      name = "terminal";
      command = "foot";
      binding = "<Super>Return";
    };
    "org/gnome/settings-daemon/plugins/media-keys/custom-keybindings/custom1" = {
      name = "terminal-alt";
      command = "foot";
      binding = "<Alt><Super>Return";
    };
    "org/gnome/desktop/search-providers" = {
      disable-external = true;
    };
    "org/gnome/desktop/screen-time-limits" = {
      history-enabled = false;
      daily-limit-enabled = false;
    };
    "org/gnome/desktop/peripherals/keyboard" = {
      delay = mkUint32 300;
      repeat-interval = mkUint32 25;
    };
    "org/gnome/desktop/input-sources" = {
      current = mkUint32 0;
      sources = [
        (mkTuple [
          "xkb"
          "workman_aberter"
        ])
        (mkTuple [
          "xkb"
          "us"
        ])
      ];
      xkb-options = [
        "ctrl:nocaps"
        "altwin:swap_ralt_rwin" # for sunshine
      ];
    };
    "org/gnome/desktop/interface" = {
      enable-hot-corners = false;
      gtk-enable-primary-paste = false;
    };
    "org/gnome/shell/app-switcher" = {
      current-workspace-only = true;
    };
    "org/gnome/mutter" = {
      workspaces-only-on-primary = false;
    };
    "org/gnome/shell" = {
      favorite-apps = [ ];
      disable-user-extensions = false;
      enabled-extensions = with pkgs.gnomeExtensions; [
        appindicator.extensionUuid
        kimpanel.extensionUuid
      ];
    };
    "org/gnome/shell/extensions/kimpanel" = {
      vertical = true;
    };
  };
}
