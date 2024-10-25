{
  inputs,
  outputs,
  pkgs,
  ...
}:
{
  home.packages = [ inputs.aagl.packages.${pkgs.system}.the-honkers-railway-launcher ];
}
