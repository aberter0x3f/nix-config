{ outputs, config, pkgs, ... }:

{
  programs.eww = {
    enable = true;
    package = pkgs.eww-tray;
  };
  ewwConfig = {
    yuck = builtins.readFile ./yuck.yuck;
    scss = import ./scss.nix {
      inherit (config) colorscheme fontProfiles;
    };
    scripts = import ./scripts { };
    modules = import ./modules { };
  };
}
