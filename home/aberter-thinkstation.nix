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
  ]
  ++ (builtins.attrValues outputs.homeManagerModules);

  home.packages = with pkgs; [
    librewolf
    # davinci-resolve-paid
  ];

  home.username = "aberter";
}
