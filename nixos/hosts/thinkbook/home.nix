{
  inputs,
  outputs,
  config,
  ...
}:
{
  home-manager = {
    extraSpecialArgs = {
      inherit inputs outputs;
      hostName = config.networking.hostName;
    };
    users.aberter = import ../../../home/aberter-thinkbook.nix;
  };
}
