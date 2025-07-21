{
  imports = [
    ./audio.nix
    ./fonts.nix
    ./xinput.nix
  ];

  programs.dconf.enable = true;

  # Enable CUPS to print documents.
  services.printing.enable = false;
}
