{ pkgs, config, ... }: {
  home.packages = with pkgs; [
    nekoray
    naiveproxy
    hysteria
  ];
}
