{
  description = "nixos-aberter";

  inputs = {
    # nixpkgs
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-25.05";

    # nixpkgs-unstable
    nixpkgs-unstable.url = "github:NixOS/nixpkgs/nixos-unstable";

    # home-manager
    home-manager = {
      url = "github:nix-community/home-manager/release-25.05";
      inputs.nixpkgs.follows = "nixpkgs";
    };

    # NUR
    nur.url = "github:nix-community/NUR";

    # # Hyprland
    # hyprland = {
    #   url = "github:hyprwm/Hyprland/v0.46.2";
    #   inputs.nixpkgs.follows = "nixpkgs";
    # };
    # hyprland-plugins = {
    #   url = "github:hyprwm/hyprland-plugins/7634792d199d32ed9396d5864e6431cde1cca6bd";
    #   inputs.hyprland.follows = "hyprland";
    # };

    # poetry2nix
    poetry2nix = {
      url = "github:nix-community/poetry2nix";
      inputs.nixpkgs.follows = "nixpkgs";
    };

    # nix-index-database
    nix-index-database = {
      url = "github:Mic92/nix-index-database";
      inputs.nixpkgs.follows = "nixpkgs";
    };

    # # wezterm
    # wezterm = {
    #   url = "github:wez/wezterm/main?dir=nix";
    #   inputs.nixpkgs.follows = "nixpkgs";
    #   inputs.rust-overlay.follows = "rust-overlay";
    # };

    # # AAGL
    # aagl.url = "github:ezKEa/aagl-gtk-on-nix";

    # niri
    niri = {
      url = "github:sodiboo/niri-flake";
    };

    # stylix
    stylix.url = "github:danth/stylix/release-25.05";

    # # anyrun
    # anyrun = {
    #   url = "github:anyrun-org/anyrun";
    #   # inputs.nixpkgs.follows = "nixpkgs";
    # };

    # # Zen browser
    # zen-browser.url = "github:0xc000022070/zen-browser-flake";

    # agenix
    agenix = {
      url = "github:ryantm/agenix";
      inputs.nixpkgs.follows = "nixpkgs";
      inputs.darwin.follows = "";
    };

    # Impermanence
    impermanence.url = "github:nix-community/impermanence";

    # colmena
    colmena.url = "github:zhaofengli/colmena";
  };

  outputs =
    {
      self,
      nixpkgs,
      ...
    }@inputs:
    let
      inherit (self) outputs;
      forEachSystem = nixpkgs.lib.genAttrs [
        "x86_64-linux"
        "aarch64-linux"
      ];
      forEachPkgs = f: forEachSystem (sys: f nixpkgs.legacyPackages.${sys});

      mkNixos =
        modules:
        nixpkgs.lib.nixosSystem {
          inherit modules;
          specialArgs = {
            inherit inputs outputs;
          };
        };
    in
    {
      # Your custom packages
      # Acessible through 'nix build', 'nix shell', etc
      packages = forEachPkgs (pkgs: (import ./pkgs { inherit pkgs inputs; }));
      # Formatter for your nix files, available through 'nix fmt'
      # Other options beside 'alejandra' include 'nixpkgs-fmt'
      formatter = forEachSystem (system: nixpkgs.legacyPackages.${system}.nixfmt-tree);

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
        aberter-thinkbook = mkNixos [ ./nixos/hosts/thinkbook ];
        aberter-thinkstation = mkNixos [ ./nixos/hosts/thinkstation ];
      };

      colmenaHive = inputs.colmena.lib.makeHive {
        meta = {
          nixpkgs = import nixpkgs { system = "x86_64-linux"; };
          specialArgs = {
            inherit inputs outputs;
          };
        };

        "aberter-thinkstation" = {
          # deployment.targetHost = "192.168.10.77";
          deployment.targetHost = "10.82.91.2";
          deployment.targetUser = "root";
          imports = [
            ./nixos/hosts/thinkstation
          ];
        };
      };
    };
}
