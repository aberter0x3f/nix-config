{ pkgs, ... }:
{
  stylix = {
    enable = true;
    autoEnable = false;
    polarity = "dark";
    base16Scheme = "${pkgs.base16-schemes}/share/themes/nord.yaml";

    fonts = {
      monospace = {
        name = "SarasaMonoSC Nerd Font";
        package = pkgs.sarasa-ubuntu-mono;
      };
      sansSerif = {
        name = "Sarasa UI SC";
        package = pkgs.sarasa-gothic-mod;
      };
      serif = {
        name = "Source Han Serif SC";
        package = pkgs.source-han-serif;
      };

      sizes = {
        applications = 11;
      };
    };

    cursor = {
      package = pkgs.bibata-cursors;
      name = "Bibata-Modern-Ice";
      size = 24;
    };
  };
}
