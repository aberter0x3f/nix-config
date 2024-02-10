{ pkgs, ... }: {
  fontProfiles = {
    enable = true;
    monospace = {
      family = "CommitMono Nerd Font Medium";
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
