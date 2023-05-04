{ config, ... }:
let inherit (config.colorscheme) colors;
in
{
  services.mako = {
    enable = true;
    font = "${config.fontProfiles.sans-serif.family} 11";
    padding = "10,20";
    anchor = "top-right";
    width = 400;
    height = 150;
    borderSize = 2;
    defaultTimeout = 12000;
    backgroundColor = "#${colors.base00}dd";
    borderColor = "#${colors.base03}dd";
    textColor = "#${colors.base05}dd";
  };
}
