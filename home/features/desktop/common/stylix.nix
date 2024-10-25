{ pkgs, ... }:
{
  stylix = {
    enable = true;
    autoEnable = false;
    polarity = "dark";
    base16Scheme = "${pkgs.base16-schemes}/share/themes/nord.yaml";

    fonts = {
      monospace = {
        name = "CommitMono Nerd Font Medium";
        package = pkgs.commit-mono;
      };
      sansSerif = {
        name = "RedFish Sans";
        package = pkgs.redfish-sans;
      };
      serif = {
        name = "RedFish Serif";
        package = pkgs.redfish-serif;
      };

      sizes = {
        applications = 11;
        terminal = 11;
      };
    };

    cursor = {
      package = pkgs.bibata-cursors;
      name = "Bibata-Modern-Ice";
      size = 24;
    };
  };
}
