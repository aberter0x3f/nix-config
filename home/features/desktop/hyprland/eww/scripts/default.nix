{ }:
{
  "battery.sh" = builtins.readFile ./battery.sh;
  "network.sh" = builtins.readFile ./network.sh;
  "volume.sh" = builtins.readFile ./volume.sh;
  "workspaces.sh" = builtins.readFile ./workspaces.sh;
}
