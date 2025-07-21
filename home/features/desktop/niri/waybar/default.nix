{ pkgs, config, ... }:

let
  netSpeedScript = pkgs.writeShellScript "net-speed" (builtins.readFile ./scripts/net-speed.sh);
in
{
  programs.waybar = {
    enable = true;

    systemd.enable = true;

    settings = [
      {
        layer = "top";
        position = "top";
        height = 32;
        modules-left = [
          "niri/workspaces"
          "tray"
        ];
        modules-center = [ ];
        modules-right = [
          "network"
          "custom/net-speed"
          "wireplumber"
          "cpu"
          "memory"
          "temperature"
          "battery"
          "clock"
        ];
        "niri/workspaces" = {
          format = "{name}";
          all-outputs = false;
          # "current-only" = true;
          "disable-click" = true;
        };
        tray = {
          "icon-size" = 20;
          spacing = 5;
        };
        network = {
          "format-wifi" = "{icon} {essid}";
          "format-ethernet" = "{icon} {ifname}";
          "format-linked" = "{ifname} (No IP)";
          "format-disconnected" = "󰲛 Disconnected";
          "format-alt" = "{ifname}: {ipaddr}/{cidr}";
          "tooltip-format" =
            "{ifname} via {gwaddr} {icon}\nSignal: {signalStrength}% | Down: {bandwidthDownBytes} | Up: {bandwidthUpBytes}";
          "format-icons" = [
            "󰤯"
            "󰤟"
            "󰤢"
            "󰤥"
            "󰤨"
          ];
        };
        "custom/net-speed" = {
          exec = netSpeedScript;
          "restart-interval" = 2;
        };
        # "custom/ip" = {
        #   exec = "~/.config/waybar/scripts/ip.sh";
        #   format = "{} {}";
        #   "return-type" = "json";
        #   interval = 10;
        # };
        wireplumber = {
          format = "{icon} {volume}";
          "format-muted" = "󰖁 {volume}";
          "format-icons" = [
            "󰕿"
            "󰖀"
            "󰕾"
          ];
          "scroll-step" = 5;
        };
        cpu = {
          format = "{icon} {usage}%";
          "format-icons" = [
            "▁"
            "▂"
            "▃"
            "▄"
            "▅"
            "▆"
            "▇"
            "█"
          ];
          states = {
            warning = 70;
            critical = 90;
          };
          interval = 5;
        };
        memory = {
          format = "󰍛 {percentage}%";
          states = {
            warning = 70;
            critical = 90;
          };
          "tooltip-format" =
            "{used:0.2f}/{total:0.2f} GiB used, {swapUsed:0.2f}/{swapTotal:0.2f} GiB swap used";
          interval = 5;
        };
        temperature = {
          "thermal-zone" = 0;
          "hwmon-path" = "/sys/class/thermal/thermal_zone0/temp";
          "critical-threshold" = 80;
          format = "󰔄 {temperatureC}";
          "format-critical" = "󰔄 {temperatureC}";
        };
        battery = {
          states = {
            warning = 30;
            critical = 15;
          };
          format = "{icon} {capacity}%";
          "format-charging" = "󰂄 {capacity}%";
          "format-plugged" = " {capacity}%";
          "format-icons" = [
            "󰂎"
            "󰁺"
            "󰁻"
            "󰁼"
            "󰁽"
            "󰁾"
            "󰁿"
            "󰂀"
            "󰂁"
            "󰂂"
            "󰁹"
          ];
        };
        clock = {
          format = "󰥔 {:%H:%M}";
          "tooltip-format" = "{calendar}";
        };
      }
    ];

    style =
      let
        colors = config.lib.stylix.colors.withHashtag;
        fonts = config.stylix.fonts;
      in
      ''
        tooltip {
          font-family: '${fonts.monospace.name}', monospace;
        }
        window#waybar {
          background-color: ${colors.base01};
          /* border-bottom: 2px solid ${colors.base0D}; */
          color: ${colors.base06};
          font-size: 16px;
          font-family: '${fonts.monospace.name}', monospace;
        }
        .modules-right {
          margin-right: 1em;
        }
        #workspaces button {
          all: unset;
          min-width: 2em;
          border-bottom: 2px solid transparent;
        }
        #workspaces button.active {
          border-bottom: 2px solid ${colors.base07};
        }
        #workspaces button.empty:not(.focused) {
          /* color: ${colors.base03}; */
          min-width: 0;
          padding: 0;
          margin: 0;
          border: 0;
          font-size: 0;
        }
        #clock,
        #battery,
        #cpu,
        #memory,
        #temperature,
        #network,
        #wireplumber,
        #custom-ip,
        #custom-net-speed {
          margin-left: 1em;
          border-bottom: 2px solid ${colors.base03};
        }
        #battery.charging, #battery.plugged {
          border-bottom: 2px solid ${colors.base07};
        }
        #battery.warning:not(.charging),
        #memory.warning,
        #cpu.warning,
        #temperature.warning {
          border-bottom: 2px solid ${colors.base09};
        }
        #battery.critical:not(.charging),
        #memory.critical,
        #cpu.critical,
        #temperature.critical,
        #network.disconnected,
        #wireplumber.muted {
          border-bottom: 2px solid ${colors.base08};
        }
      '';
  };
}
