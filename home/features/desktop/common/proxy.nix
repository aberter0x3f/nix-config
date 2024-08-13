{ pkgs, config, ... }: {
  home.packages = with pkgs; [
    # nekoray
    # hysteria-1
    # hysteria
    sing-box
    mieru
  ];
}
