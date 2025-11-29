{ pkgs, lib, ... }:
{
  virtualisation.podman = {
    enable = true;
    dockerCompat = true;
    defaultNetwork.settings.dns_enabled = true;
  };

  environment.systemPackages = [
    pkgs.distrobox
    pkgs.podman-compose
  ];

  virtualisation.oci-containers.backend = "podman";
}
