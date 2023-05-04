{ pkgs, ... }: {
  imports = [
    ./git.nix
    ./gpg.nix
    ./zsh.nix
    ./fzf.nix
  ];

  home.packages = with pkgs; [
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
  ];
}
