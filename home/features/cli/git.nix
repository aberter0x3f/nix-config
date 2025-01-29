{ pkgs, ... }:
{
  programs.git = {
    package = pkgs.gitAndTools.gitFull;
    enable = true;
    userName = "Aberter Yan";
    userEmail = "aberter0x3f@disroot.org";
    ignores = [
      "*~"
      "*.swp"
    ];
    extraConfig = {
      init.defaultBranch = "main";
      core.editor = "nvim";
      #protocol.keybase.allow = "always";
      credential.helper = "store --file ~/.git-credentials";
      pull.rebase = "true";
      core.symlinks = true;
    };
    signing = {
      signByDefault = true;
      key = null;
    };
    delta = {
      enable = true;
    };
  };
}
