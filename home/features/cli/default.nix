{ pkgs, ... }:
{
  imports = [
    # ./nushell
    ./yazi
    ./delta.nix
    ./fd.nix
    ./fzf.nix
    ./git.nix
    ./gpg.nix
    ./lazygit.nix
    ./less.nix
    ./nh.nix
    ./ripgrep.nix
    ./typst.nix
    ./zsh.nix
  ];

  home.packages = with pkgs; [
    bc
    wget
    jq
    socat
    comma
    lesspass-cli
    pciutils
    opencc
    tealdeer
    file
    imagemagick
    nil
    # nixd
    lua-language-server
    nixfmt-rfc-style
    # inputs.codeium.packages.${system}.codeium-lsp
    bat
    eza
    ouch
    acpi
    htop-vim
    p7zip
    zip
    unzip
    killall
    dos2unix
    duf
    dust
    trashy
  ];
}
