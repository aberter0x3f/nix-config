{ pkgs, ... }:
{
  programs.git = {
    package = pkgs.gitAndTools.gitFull;
    enable = true;
    userName = "yzy-1";
    userEmail = "50034950+yzy-1@users.noreply.github.com";
    ignores = [ "*~" "*.swp" ];
    extraConfig = {
      init.defaultBranch = "main";
      core.editor = "nvim";
      #protocol.keybase.allow = "always";
      credential.helper = "store --file ~/.git-credentials";
      pull.rebase = "true";
      core.symlinks = true;
    };
  };
}
