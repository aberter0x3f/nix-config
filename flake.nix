{
  description = "nixos-yzy1";

  inputs = {
    # nixpkgs
    nixpkgs.url = github:NixOS/nixpkgs/nixos-unstable;
    # nixpkgs.url = github:NixOS/nixpkgs/4a97d6181c06655ee8952cd2f43b75e08c77df0d; ok
    # nixpkgs.url = github:NixOS/nixpkgs/45e138e55a068035c2ff4608c2a03a42ac6c44b7; not ok
    # nixpkgs.url = github:NixOS/nixpkgs/8dfad603247387df1df4826b8bea58efc5d012d8;

    # home-manager
    home-manager = {
      url = github:nix-community/home-manager;
      inputs.nixpkgs.follows = "nixpkgs";
    };

    # NUR
    nur.url = github:nix-community/NUR;

    # rust-overlay
    rust-overlay = {
      url = github:oxalica/rust-overlay;
      inputs.nixpkgs.follows = "nixpkgs";
    };

    # nix-colors
    nix-colors.url = github:misterio77/nix-colors;

    # Hyprland
    hyprland = {
      # url = github:hyprwm/Hyprland/v0.32.3;
      url = github:yzy-1/Hyprland;
      inputs.nixpkgs.follows = "nixpkgs";
    };

    # AAGL
    aagl = {
      url = github:ezKEa/aagl-gtk-on-nix;
      inputs.nixpkgs.follows = "nixpkgs";
    };

    # Typst
    typst = {
      url = github:typst/typst;
      inputs.nixpkgs.follows = "nixpkgs";
    };

    # Codeium
    codeium = {
      url = github:jcdickinson/codeium.nvim;
      inputs.nixpkgs.follows = "nixpkgs";
    };

    # poetry2nix
    poetry2nix = {
      url = github:nix-community/poetry2nix;
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs = { self, nixpkgs, home-manager, nur, poetry2nix, ... }@inputs:
    let
      inherit (self) outputs;
      forEachSystem = nixpkgs.lib.genAttrs [ "x86_64-linux" "aarch64-linux" ];
      forEachPkgs = f: forEachSystem (sys: f nixpkgs.legacyPackages.${sys});

      mkNixos = modules: nixpkgs.lib.nixosSystem {
        inherit modules;
        specialArgs = { inherit inputs outputs; };
      };
      mkHome = modules: pkgs: home-manager.lib.homeManagerConfiguration {
        inherit modules pkgs;
        extraSpecialArgs = { inherit inputs outputs; };
      };
    in
    rec {
      # Your custom packages
      # Acessible through 'nix build', 'nix shell', etc
      packages = forEachPkgs (pkgs: (import ./pkgs { inherit pkgs; }));
      # Formatter for your nix files, available through 'nix fmt'
      # Other options beside 'alejandra' include 'nixpkgs-fmt'
      formatter = forEachSystem (system: nixpkgs.legacyPackages.${system}.alejandra);

      # Your custom packages and modifications, exported as overlays
      overlays = import ./overlays { inherit inputs; };
      # Reusable nixos modules you might want to export
      # These are usually stuff you would upstream into nixpkgs
      nixosModules = import ./modules/nixos;
      # Reusable home-manager modules you might want to export
      # These are usually stuff you would upstream into home-manager
      homeManagerModules = import ./modules/home-manager;

      # NixOS configuration entrypoint
      # Available through 'nixos-rebuild --flake .#your-hostname'
      nixosConfigurations = {
        yzy1-thinkbook = mkNixos [ ./nixos/configuration.nix ];
      };

      # Standalone home-manager configuration entrypoint
      # Available through 'home-manager --flake .#your-username@your-hostname'
      homeConfigurations = {
        "yzy1@yzy1-thinkbook" = mkHome [ ./home/yzy1.nix ] nixpkgs.legacyPackages."x86_64-linux";
      };
    };
}
