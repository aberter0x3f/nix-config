{ inputs, pkgs, ... }:
{
  imports = [
    # ./nushell
    ./yazi
    ./fd.nix
    ./fzf.nix
    ./git.nix
    ./gpg.nix
    ./lazygit.nix
    ./nh.nix
    ./ripgrep.nix
    ./typst.nix
    ./zsh.nix
  ];

  home.packages = with pkgs; [
    bc
    lf
    wget
    gojq
    socat
    comma
    lesspass-cli
    pciutils
    opencc
    tealdeer
    file
    imagemagick
    rust-analyzer
    nixd
    lua-language-server
    nixfmt-rfc-style
    vscode-langservers-extracted
    emmet-language-server
    inputs.codeium.packages.${system}.codeium-lsp
    typos-lsp
    bat
    eza
    cpt
    cpt-fetcher
    ouch
    rar
    acpi
    htop-vim
    p7zip
    zip
    unzip
    killall
    dos2unix
    duf
    dust
    delta
    trashy
  ];
}
