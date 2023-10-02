{ inputs, pkgs, ... }: {
  imports = [
    ./fzf.nix
    ./git.nix
    ./gpg.nix
    ./lazygit.nix
    ./ripgrep.nix
    ./typst.nix
    ./zsh.nix
  ];

  home.packages = with pkgs; [
    bc
    lf
    wget
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
    rust-analyzer
    rnix-lsp
    lua-language-server
    vscode-langservers-extracted
    inputs.codeium.packages.${system}.codeium-lsp
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
  ];
}
