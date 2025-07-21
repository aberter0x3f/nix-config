{ pkgs, ... }:
{
  imports = [
    ./global
    # ./features/desktop/hyprland
    # ./features/desktop/plasma
    ./features/desktop/niri
    ./features/desktop/special/vscode
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
