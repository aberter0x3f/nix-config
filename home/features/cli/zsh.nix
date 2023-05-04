{ pkgs, ... }:
{
  programs.zsh = {
    enable = true;

    shellAliases = {
      e = "$EDITOR";
      ls = "ls --color=auto";
      ll = "ls -lhF";
      la = "ls -alhF";
    };

    history = {
      expireDuplicatesFirst = true;
    };

    defaultKeymap = "emacs";

    enableCompletion = true;
    enableAutosuggestions = true;
    enableSyntaxHighlighting = true;

    initExtra = ''
      autoload -U promptinit; promptinit
      prompt pure

      eval "$(dircolors)"
    '';

    plugins = [
      {
        name = "zsh-colored-man-pages";
        file = "colored-man-pages.plugin.zsh";
        src = pkgs.fetchFromGitHub {
          owner = "ael-code";
          repo = "zsh-colored-man-pages";
          rev = "57bdda68e52a09075352b18fa3ca21abd31df4cb";
          sha256 = "sha256-087bNmB5gDUKoSriHIjXOVZiUG5+Dy9qv3D69E8GBhs=";
        };
      }
      {
        name = "zsh-nix-shell";
        file = "nix-shell.plugin.zsh";
        src = pkgs.fetchFromGitHub {
          owner = "chisui";
          repo = "zsh-nix-shell";
          rev = "v0.6.0";
          sha256 = "sha256-B0mdmIqefbm5H8wSG1h41c/J4shA186OyqvivmSK42Q=";
        };
      }
      {
        name = "zsh-completions";
        file = "zsh-completions.plugin.zsh";
        src = pkgs.fetchFromGitHub {
          owner = "clarketm";
          repo = "zsh-completions";
          rev = "8ded397b50c1dfa4f266e72d6d15877ea0d6fe89";
          sha256 = "sha256-7e6cn/foED7k2kZJ+B6RjeD477IotIbo13YdGsSmeTo=";
        };
      }
      {
        name = "pure";
        file = "pure.zsh";
        src = pkgs.fetchFromGitHub {
          owner = "sindresorhus";
          repo = "pure";
          rev = "v1.21.0";
          sha256 = "sha256-YfasTKCABvMtncrfoWR1Su9QxzCqPED18/BTXaJHttg=";
        };
      }
    ];
  };
}
