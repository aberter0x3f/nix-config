{ pkgs, ... }: {
  fontProfiles = {
    enable = true;
    monospace = {
      family = "KuliaMono Nerd Font";
      # package = pkgs.kulia-mono;
    };
    sans-serif = {
      family = "RedFish Sans";
      # package = pkgs.redfish-sans;
    };
    serif = {
      family = "RedFish Serif";
      # package = pkgs.redfish-serif;
    };
  };
}
