{ pkgs, ... }:
{
  imports = [
    ./global
    # ./features/desktop/hyprland
    # ./features/desktop/plasma
    ./features/desktop/niri
    # ./features/desktop/special/godot.nix
    ./features/desktop/special/vscode
    ./features/desktop/special/zed-editor
  ];

  home.packages = with pkgs; [
    cpt
    cpt-fetcher

    # Web broswer
    librewolf
    # inputs.zen-browser.packages."${system}".beta
    tor-browser
    (brave.override {
      commandLineArgs = "--enable-wayland-ime";
    })

    # Terminal
    kitty

    # IM
    # kotatogram-desktop-iso-date
    _64gram
    qq

    # DAW
    # lmms-nightly

    cherry-studio
  ];

  home.username = "aberter";
}
