{
  outputs,
  pkgs,
  ...
}:
{
  imports = [
    # inputs.impermanence.homeManagerModules.impermanence

    ./global
    ./features/desktop/gnome
  ] ++ (builtins.attrValues outputs.homeManagerModules);

  home.packages = with pkgs; [
    librewolf
    blender
    prismlauncher
  ];

  home.username = "aberter";
}
