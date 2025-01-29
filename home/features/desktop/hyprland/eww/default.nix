{ config, ... }:
{
  programs.eww = {
    enable = true;
  };
  ewwConfig = {
    yuck = builtins.readFile ./yuck.yuck;
    scss = import ./scss.nix {
      colors = config.lib.stylix.colors.withHashtag;
      fonts = config.stylix.fonts;
    };
    scripts = import ./scripts;
    modules = import ./modules;
  };
}
