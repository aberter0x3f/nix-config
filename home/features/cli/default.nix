{ pkgs, ... }: {
  imports = [
    ./fzf.nix
    ./git.nix
    ./gpg.nix
    ./lazygit.nix
    ./zsh.nix
  ];

  home.packages = with pkgs; [
    bc
    lf
    wget
    ripgrep
    fd
    gojq
    socat
    lesspass-cli
    pciutils
    tree
    opencc
    tealdeer
    clang-tools
    file
    lua-language-server
    bat
    exa
    cpt
    cpt-fetcher
    rnix-lsp
    ouch
    rar
    acpi
    htop-vim
    p7zip
    zip
    unzip
  ];
}
