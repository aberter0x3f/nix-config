{}:

{
  volume = builtins.readFile ./volume.sh;
  workspaces = builtins.readFile ./workspaces.sh;
}
