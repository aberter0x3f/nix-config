{
  pkgs,
  ...
}:
{
  imports = [
    ../../global
    ../../features/desktop/niri.nix
    ../../features/special/bluetooth.nix
    ../../features/special/embedded.nix
    ../../features/special/libvirt.nix
    ../../features/special/light.nix
    ../../features/special/podman.nix
    ../../features/special/proxy.nix
    ./hardware-configuration.nix
    ./home.nix
  ];

  nixpkgs = {
    config = {
      allowUnfree = true;
    };
  };

  networking = {
    hostName = "aberter-thinkbook";
    networkmanager = {
      enable = true;
    };
    firewall = {
      enable = true;
      trustedInterfaces = [ "virbr0" ];
      allowedTCPPorts = [ 25565 ];
      allowedUDPPorts = [ 25565 ];
    };

    hosts = {
      "0.0.0.0" = [
        "overseauspider.yuanshen.com"
        "log-upload-os.hoyoverse.com"
        "log-upload-os.mihoyo.com"
        "dump.gamesafe.qq.com"

        "log-upload.mihoyo.com"
        "ys-log-upload-os.hoyoverse.com"
        "devlog-upload.mihoyo.com"
        "uspider.yuanshen.com"
        "sg-public-data-api.hoyoverse.com"
        "public-data-api.mihoyo.com"
        "hkrpg-log-upload-os.hoyoverse.com"

        "prd-lender.cdp.internal.unity3d.com"
        "thind-prd-knob.data.ie.unity3d.com"
        "thind-gke-usc.prd.data.corp.unity3d.com"
        "cdp.cloud.unity3d.com"
        "remote-config-proxy-prd.uca.cloud.unity3d.com"
      ];
    };
  };

  boot.tmp.cleanOnBoot = true;
  boot.loader = {
    efi = {
      canTouchEfiVariables = true;
      efiSysMountPoint = "/boot/efi";
    };
    grub = {
      enable = true;
      efiSupport = true;
      device = "nodev";
    };
  };

  users.users =
    let
      pub-keys = import ../../../secrets/pub-keys.nix;
    in
    {
      aberter = {
        isNormalUser = true;
        openssh.authorizedKeys.keys = pub-keys.users;
        subUidRanges = [
          {
            count = 65536;
            startUid = 524288;
          }
        ];
        subGidRanges = [
          {
            count = 65536;
            startGid = 524288;
          }
        ];
        extraGroups = [
          "wheel"
          "audio"
          "sound"
          "video"
          "networkmanager"
          "input"
          "tty"
          "camera"
          "libvirtd"
          "adbusers"
          "podman"
          "plugdev"
          "dialout"
          "usb"
          "render"
        ];
        shell = pkgs.dash;
      };
    };

  programs.adb.enable = true;

  # xdg.portal = {
  #   enable = true;
  #   wlr.enable = true;
  #   # extraPortals = with pkgs; [
  #   #   xdg-desktop-portal-gtk
  #   # ];
  #   # config.common.default = "*";
  # };

  # List services that you want to enable:

  # Enable the X11 windowing system.
  services.xserver = {
    dpi = 144;
  };

  # services.displayManager.sddm = {
  #   enable = true;
  #   wayland.enable = true;
  # };

  # programs.hyprland = {
  #   enable = true;
  #   # set the flake package
  #   package = inputs.hyprland.packages.${pkgs.stdenv.hostPlatform.system}.hyprland;
  #   # make sure to also set the portal package, so that they are in sync
  #   portalPackage =
  #     inputs.hyprland.packages.${pkgs.stdenv.hostPlatform.system}.xdg-desktop-portal-hyprland.override
  #       { stdenv = pkgs.gcc14Stdenv; };
  # };

  # services.displayManager.defaultSession = "plasma";
  #
  # services.desktopManager.plasma6.enable = true;
  #
  # environment.plasma6.excludePackages = with pkgs.kdePackages; [
  #   oxygen
  #   oxygen-icons
  #   discover
  #   konsole
  #   kate
  #   gwenview
  #   elisa
  # ];

  # services.xserver.desktopManager.gnome = {
  #   enable = true;
  #   extraGSettingsOverridePackages = [ pkgs.mutter ];
  #   extraGSettingsOverrides = ''
  #     [org.gnome.mutter]
  #     experimental-features=['scale-monitor-framebuffer', 'xwayland-native-scaling']
  #   '';
  # };
  #
  # environment.gnome.excludePackages = (
  #   with pkgs;
  #   [
  #     atomix # puzzle game
  #     cheese # webcam tool
  #     epiphany # web browser
  #     evince # document viewer
  #     geary # email reader
  #     gedit # text editor
  #     gnome-characters
  #     gnome-music
  #     gnome-photos
  #     gnome-terminal
  #     gnome-tour
  #     hitori # sudoku game
  #     iagno # go game
  #     tali # poker game
  #     totem # video player
  #   ]
  # );

  # This setups a SSH server. Very important if you're setting up a headless system.
  # Feel free to remove if you don't need it.
  services.openssh = {
    enable = true;

    settings = {
      PermitRootLogin = "yes";
      PasswordAuthentication = false;
    };
  };

  security.pam = {
    services = {
      swaylock = { };
      ly.enableGnomeKeyring = true;
    };
  };

  services.ollama = {
    enable = true;
    acceleration = "rocm";
    environmentVariables = {
      HCC_AMDGPU_TARGET = "gfx1035";
      OLLAMA_ORIGINS = "*";
    };
    rocmOverrideGfx = "10.3.5";
  };

  # List packages installed in system profile. To search, run:
  # $ nix search wget
  environment.systemPackages = with pkgs; [
    cachix
    pulseaudio
    iptables
    pm2
    # C & C++
    gcc
    gnumake
    cmake
    pkgconf
    gdb
    llvmPackages_19.clang-tools
    llvmPackages_19.clang
    llvm
    # Lua
    luajit
    # Node.js
    nodejs
    corepack
    # # Go
    # go
    # # Java
    # jdk
    # gradle
    # Python
    (
      let
        my-python-packages =
          python-packages: with python-packages; [
            pandas
            requests
            pyyaml
            python-lsp-server
            python-lsp-black
            flake8
            black
          ];
      in
      python3.withPackages my-python-packages
    )
    # Rust
    (rust-bin.stable.latest.default.override {
      extensions = [ "rust-src" ];
      targets = [
        "wasm32-wasip1"
        "wasm32-unknown-unknown"
      ];
    })
    # # protobuf
    # protobuf
    # Editor
    neovim-unwrapped
    tree-sitter
  ];

  # https://nixos.wiki/wiki/FAQ/When_do_I_update_stateVersion
  system.stateVersion = "25.05";
}
