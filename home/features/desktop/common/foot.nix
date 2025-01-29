{
  config,
  lib,
  ...
}:
{
  home.sessionVariables = {
    TERMINAL = "foot";
  };

  stylix.targets.foot.enable = true;

  programs.foot = {
    enable = true;
    settings = {
      main = {
        shell = lib.meta.getExe config.programs.zsh.package;
      };
      csd = {
        preferred = "none";
      };
      key-bindings = {
        font-increase = "none";
        font-decrease = "none";
        font-reset = "none";
      };
    };
  };

  programs.readline.extraConfig = ''
    $if term=foot
    set show-mode-in-prompt on
    set emacs-mode-string "\1\e]133;A\e\\\2"
    # Uncomment and/or adjust if you're using the vi editing-mode.
    # set vi-cmd-mode-string "\1\e]133;A\e\\\2"
    # set vi-ins-mode-string "\1\e]133;A\e\\\2"
    $endif
  '';
}
