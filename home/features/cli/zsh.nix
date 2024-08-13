{ pkgs, ... }:
{
  programs.zsh = {
    enable = true;

    shellAliases = {
      e = "$EDITOR";
      ls = "eza --sort=Name --time-style=iso --group-directories-first";
      ll = "eza -lF --sort=Name --time-style=iso --group-directories-first";
      la = "eza -alF --sort=Name --time-style=iso --group-directories-first";
      rm = "rm -i";
    };

    history = {
      expireDuplicatesFirst = true;
    };

    defaultKeymap = "emacs";

    enableCompletion = true;
    autosuggestion.enable = true;
    syntaxHighlighting.enable = true;

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
          rev = "v0.7.0";
          sha256 = "sha256-oQpYKBt0gmOSBgay2HgbXiDoZo5FoUKwyHSlUrOAP5E=";
        };
      }
      {
        name = "zsh-completions";
        file = "zsh-completions.plugin.zsh";
        src = pkgs.fetchFromGitHub {
          owner = "clarketm";
          repo = "zsh-completions";
          rev = "9eb27c3f45bb4d8af66d928fb5a51e4ae0019714";
          sha256 = "sha256-NfHo8Nc8DZpDNO25lVyZ2LLVv+sJPdyWt1Feg6jcNe4=";
        };
      }
      {
        name = "pure";
        file = "pure.zsh";
        src = pkgs.fetchFromGitHub {
          owner = "sindresorhus";
          repo = "pure";
          rev = "v1.22.0";
          sha256 = "sha256-TR4CyBZ+KoZRs9XDmWE5lJuUXXU1J8E2Z63nt+FS+5w=";
        };
      }
    ];
  };
}
