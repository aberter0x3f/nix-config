{
  config,
  lib,
  pkgs,
  utils,
  ...
}:
let
  cfg = config.services.mieru;
  settingsFormat = pkgs.formats.json { };
in
{
  options = {
    services.mieru = {
      enable = lib.mkEnableOption "mieru proxy client";

      package = lib.mkPackageOption pkgs "mieru" { };

      settings = lib.mkOption {
        type = lib.types.submodule {
          freeformType = settingsFormat.type;
        };
        default = { };
        description = ''
          The mieru client configuration.
          See https://github.com/enfein/mieru/blob/main/docs/client-install.md for documentation.

          Options containing secret data should be set to an attribute set
          containing the attribute `_secret` - a string pointing to a file
          containing the value the option should be set to.
        '';
      };
    };
  };

  config = lib.mkIf cfg.enable {
    systemd.packages = [ cfg.package ];

    systemd.services.mieru = {
      description = "Mieru proxy client";
      after = [
        "network-online.target"
        "network.service"
        "networking.service"
        "NetworkManager.service"
        "systemd-networkd.service"
      ];
      wants = [ "network-online.target" ];

      # This preStart script generates the final config file in a runtime directory,
      # resolving any secrets specified with the `_secret` attribute.
      preStart = utils.genJqSecretsReplacementSnippet cfg.settings "/run/mieru/config.json";

      unitConfig = {
        StartLimitBurst = 5;
        StartLimitIntervalSec = 60;
      };

      serviceConfig = {
        Environment = "MIERU_CONFIG_JSON_FILE=/run/mieru/config.json";
        ExecStart = "${lib.getExe cfg.package} run";

        StateDirectory = "mieru";
        StateDirectoryMode = "0700";
        RuntimeDirectory = "mieru";
        RuntimeDirectoryMode = "0700";

        Restart = "on-failure";
        RestartSec = 1;

        Type = "exec";
      };

      wantedBy = [ "multi-user.target" ];
    };
  };
}
