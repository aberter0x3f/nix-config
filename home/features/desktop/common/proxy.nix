{ pkgs, config, ... }: {
  home.packages = with pkgs; [
    nekoray
    hysteria
  ];
}
