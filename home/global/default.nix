{
  inputs,
  config,
  ...
}:
{
  imports = [
    # inputs.nur.modules.homeManager.default
    inputs.nix-index-database.homeModules.nix-index

    ../features/cli
  ];

  systemd.user.startServices = "sd-switch";

  programs.home-manager.enable = true;

  home = rec {
    homeDirectory = "/home/${config.home.username}";
    sessionPath = [
      "${homeDirectory}/.local/bin"
      "${homeDirectory}/.cargo/bin"
    ];
    sessionVariables = {
      C_INCLUDE_PATH = "$HOME/.local/include";
      CPLUS_INCLUDE_PATH = "$HOME/.local/include";
    };

    # https://nixos.wiki/wiki/FAQ/When_do_I_update_stateVersion
    stateVersion = "25.05";
  };
}
