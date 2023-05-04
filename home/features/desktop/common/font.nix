{ pkgs, ... }: {
  fontProfiles = {
    enable = true;
    monospace = {
      family = "Sarasa Term SC Nerd Font";
      package = pkgs.sarasa-term-sc-nerd-font;
    };
    sans-serif = {
      family = "RedFish Sans";
      package = pkgs.redfish-sans;
    };
    serif = {
      family = "RedFish Serif";
      package = pkgs.redfish-serif;
    };
  };
}
