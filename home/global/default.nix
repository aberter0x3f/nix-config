{ inputs, outputs, config, lib, ... }:
{
  imports = [
    inputs.nix-colors.homeManagerModules.default

    ../features/cli
  ];

  nixpkgs = {
    # You can add overlays here
    overlays = [
      # Add overlays your own flake exports (from overlays and pkgs dir):
      outputs.overlays.additions
      outputs.overlays.modifications

      # You can also add overlays exported from other flakes:
      inputs.rust-overlay.overlays.default

      # Or define it inline, for example:
      # (final: prev: {
      #   hi = final.hello.overrideAttrs (oldAttrs: {
      #     patches = [ ./change-hello-to-hi.patch ];
      #   });
      # })
    ];
    # Configure your nixpkgs instance
    config = {
      allowUnfree = true;
      allowUnfreePredicate = (_: true);
    };
  };

  systemd.user.startServices = "sd-switch";

  programs.home-manager.enable = true;

  home = rec {
    homeDirectory = "/home/${config.home.username}";
    sessionPath = [ "${homeDirectory}/.local/bin" ];
    sessionVariables = {
      C_INCLUDE_PATH = "$HOME/.local/include:$C_INCLUDE_PATH";
      CPLUS_INCLUDE_PATH = "$HOME/.local/include:$CPLUS_INCLUDE_PATH";
      LOCALE_ARCHIVE_2_27 = lib.mkForce "$LOCALE_ARCHIVE";
    };

    # https://nixos.wiki/wiki/FAQ/When_do_I_update_stateVersion
    stateVersion = "22.11";
  };

  systemd.user.sessionVariables = {
    LOCALE_ARCHIVE_2_27 = lib.mkForce "$LOCALE_ARCHIVE";
  };
}
