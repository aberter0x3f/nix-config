{
  pkgs,
  ...
}:
{
  services.udev.packages = [
    pkgs.openocd
    pkgs.stlink
  ];
}
