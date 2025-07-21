{
  config,
  inputs,
  ...
}:
{
  imports = [
    inputs.stylix.homeModules.stylix

    ./foot.nix
    ./ime.nix
    ./proxy.nix
    ./stylix.nix
    # ./wezterm.nix
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
