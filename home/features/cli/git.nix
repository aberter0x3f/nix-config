{ pkgs, ... }:
{
  programs.git = {
    package = pkgs.gitFull;
    enable = true;
    ignores = [
      "*~"
      "*.swp"
    ];
    settings = {
      user.name = "Aberter Yan";
      user.email = "aberter0x3f@disroot.org";
      init.defaultBranch = "main";
      core.editor = "nvim";
      # protocol.keybase.allow = "always";
      credential.helper = "store --file ~/.git-credentials";
      pull.rebase = "true";
      core.symlinks = true;
    };
    signing = {
      signByDefault = true;
      key = null;
    };
  };
}
