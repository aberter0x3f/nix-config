{
  config,
  pkgs,
  inputs,
  ...
}:
{
  imports = [
    inputs.stylix.homeManagerModules.stylix

    ./foot.nix
    ./proxy.nix
    ./stylix.nix
    # ./wezterm.nix
  ];

  home.packages = with pkgs; [
    # Web broswer
    librewolf
    tor-browser
    # (brave.override {
    #   commandLineArgs = "--enable-wayland-ime --wayland-text-input-version=3";
    # })
    # Terminal
    kitty
    # IM
    # kotatogram-desktop-iso-date
    _64gram
    qq
    # GUI editor
    vscode-fhs
    zed-editor
    # DAW
    # lmms-nightly
  ];

  xdg = {
    mimeApps.enable = true;
    userDirs = {
      enable = true;
      desktop = "${config.home.homeDirectory}/Desktop";
      documents = "${config.home.homeDirectory}/Documents";
      download = "${config.home.homeDirectory}/Downloads";
      music = "${config.home.homeDirectory}/Documents";
      pictures = "${config.home.homeDirectory}/Documents";
      publicShare = "${config.home.homeDirectory}/Public";
      templates = "${config.home.homeDirectory}/Templates";
      videos = "${config.home.homeDirectory}/Documents";
    };
  };
}
