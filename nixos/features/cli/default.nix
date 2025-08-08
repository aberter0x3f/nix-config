{ pkgs, ... }:
{
  imports = [
    ./agenix.nix
    ./env.nix
    ./fhs.nix
    ./home-manager.nix
    ./locale.nix
    ./pam.nix
    ./sudo.nix
    ./unsafe-wifi.nix
    ./xkb.nix
  ];

  programs.git = {
    enable = true;
    package = pkgs.gitAndTools.gitFull;
    config = {
      init.defaultBranch = "main";
    };
  };
  programs.mtr.enable = true;
  programs.gnupg.agent = {
    enable = true;
    enableSSHSupport = true;
  };
  programs.zsh.enable = true;
  services.gvfs.enable = true;
}
