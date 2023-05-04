# This is your system's configuration file.
# Use this to configure your system environment (it replaces /etc/nixos/configuration.nix)

{ inputs, outputs, lib, config, pkgs, ... }: {
  # You can import other NixOS modules here
  imports = [
    ../cachix.nix

    # If you want to use modules your own flake exports (from modules/nixos):
    # outputs.nixosModules.example

    # Or modules from other flakes (such as nixos-hardware):
    inputs.nur.nixosModules.nur
    inputs.hyprland.nixosModules.default
    # inputs.hardware.nixosModules.common-cpu-amd
    # inputs.hardware.nixosModules.common-ssd

    # You can also split up your configuration and import pieces of it here:
    # ./users.nix

    # Import your generated (nixos-generate-config) hardware configuration
    ./hardware-configuration.nix
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
      # Disable if you don't want unfree packages
      allowUnfree = true;
    };
  };

  nix = {
    # This will add each flake input as a registry
    # To make nix3 commands consistent with your flake
    registry = lib.mapAttrs (_: value: { flake = value; }) inputs;

    # This will additionally add your inputs to the system's legacy channels
    # Making legacy nix commands consistent as well, awesome!
    nixPath = lib.mapAttrsToList (key: value: "${key}=${value.to.path}") config.nix.registry;

    settings = {
      # Enable flakes and new 'nix' command
      experimental-features = "nix-command flakes repl-flake";
      # Deduplicate and optimize nix store
      auto-optimise-store = true;

      substituters = [
        "https://mirrors.tuna.tsinghua.edu.cn/nix-channels/store"
        # "https://mirrors.ustc.edu.cn/nix-channels/store"
      ];
    };
  };

  # Hostname
  networking.hostName = "yzy1-thinkbook";

  networking.networkmanager.enable = true; # Easiest to use and most distros use this by default.

  networking.firewall.enable = false;

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

  # Set your time zone.
  time.timeZone = "Asia/Shanghai";

  # Select internationalisation properties.
  i18n = rec {
    defaultLocale = "en_XX.UTF-8@POSIX";
    supportedLocales = [ "en_XX.UTF-8@POSIX/UTF-8" "en_US.UTF-8/UTF-8" "C.UTF-8/UTF-8" "zh_CN.UTF-8/UTF-8" ];
    extraLocaleSettings = {
      LANGUAGE = "en_XX.UTF-8@POSIX:en_US:en:C";
      LC_CTYPE = "en_US.UTF-8";
    };
    glibcLocales = pkgs.glibcLocalesWithEnXX.override {
      allLocales = false;
      locales = supportedLocales;
    };
    inputMethod = {
      enabled = "fcitx5";
      fcitx5 = {
        addons = with pkgs; [
          fcitx5-rime
          fcitx5-gtk
          fcitx5-lua
          fcitx5-configtool
        ];
      };
    };
  };

  fonts = {
    enableDefaultFonts = true;
    fontconfig = {
      enable = true;
      antialias = true;
      hinting.enable = true;
      subpixel.lcdfilter = "default";
      defaultFonts = {
        emoji = [ "Noto Color Emoji" ];
        monospace = [
          "Sarasa Term SC Nerd Font"
          "Plangothic P2"
          "Plangothic P1"
        ];
        sansSerif = [
          "RedFish Sans"
          "Plangothic P2"
          "Plangothic P1"
        ];
        serif = [
          "RedFish Serif"
          "Plangothic P2"
          "Plangothic P1"
        ];
      };
      localConf = ''
        <?xml version="1.0"?>
        <!DOCTYPE fontconfig SYSTEM "urn:fontconfig:fonts.dtd">
        <fontconfig>

        <match target="pattern">
          <test name="family" compare="contains">
            <string>Source Han Sans</string>
          </test>
          <edit name="family" mode="prepend">
            <string>RedFish Sans</string>
            <string>Plangothic P2</string>
            <string>Plangothic P1</string>
          </edit>
        </match>

        <match target="pattern">
          <test name="family" compare="contains">
            <string>Noto Sans</string>
          </test>
          <edit name="family" mode="prepend">
            <string>RedFish Sans</string>
            <string>Plangothic P2</string>
            <string>Plangothic P1</string>
          </edit>
        </match>

        <match target="pattern">
          <test name="family" compare="contains">
            <string>Noto Serif</string>
          </test>
          <edit name="family" mode="prepend">
            <string>RedFish Serif</string>
            <string>Plangothic P2</string>
            <string>Plangothic P1</string>
          </edit>
        </match>
        </fontconfig>
      '';
    };
    fonts = with pkgs; [
      noto-fonts-emoji
      noto-fonts
      sarasa-term-sc-nerd-font
      redfish-sans
      redfish-serif
      config.nur.repos.xddxdd.plangothic-fonts.allideo
      lxgw-wenkai-gb-fusion
    ];
  };

  console = {
    earlySetup = true;
    useXkbConfig = true; # use xkbOptions in tty.
  };

  # Enable sound.
  sound.enable = true;
  hardware.bluetooth = {
    enable = true;
    settings = {
      General = {
        Enable = "Source,Sink,Media,Socket";
        Experimental = true;
      };
    };
  };

  # Configure your system-wide user settings (groups, etc), add more users as needed.
  users.users = {
    yzy1 = {
      isNormalUser = true;
      openssh.authorizedKeys.keys = [
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
      ];
      shell = pkgs.zsh;
    };
  };

  environment = {
    variables = {
      EDITOR = "nvim";
      NIX_REMOTE = "daemon";
      MOZ_USE_XINPUT2 = "1";
      BAT_THEME = "base16";
    };
  };

  virtualisation.podman = {
    enable = true;
    dockerCompat = true;
    defaultNetwork.settings.dns_enabled = true;
  };
  virtualisation.libvirtd.enable = true;

  # Some programs need SUID wrappers, can be configured further or are
  # started in user sessions.
  programs.git = {
    enable = true;
    config = {
      init.defaultBranch = "main";
    };
  };
  programs.mtr.enable = true;
  programs.gnupg.agent = {
    enable = true;
    enableSSHSupport = true;
  };
  programs.zsh.enable = true;
  programs.dconf.enable = true;
  programs.adb.enable = true;

  xdg.portal = {
    enable = true;
    wlr.enable = true;
  };

  # List services that you want to enable:

  # Enable the X11 windowing system.
  services.xserver.enable = true;
  services.xserver.dpi = 144;

  services.xserver.displayManager.startx.enable = true;

  # Configure keymap in X11
  services.xserver.layout = "us";
  services.xserver.xkbOptions = "ctrl:nocaps";

  # Enable CUPS to print documents.
  services.printing.enable = true;

  services.pipewire = {
    enable = true;
    alsa.enable = true;
    alsa.support32Bit = true;
    pulse.enable = true;
    jack.enable = true;
    wireplumber.enable = true;
  };

  # Enable touchpad support (enabled default in most desktopManager).
  services.xserver.libinput.enable = true;
  services.xserver.libinput.touchpad.tapping = true;

  services.v2raya.enable = true;

  # This setups a SSH server. Very important if you're setting up a headless system.
  # Feel free to remove if you don't need it.
  services.openssh = {
    enable = false;

    settings = {
      # Forbid root login through SSH.
      PermitRootLogin = "no";
      # Use keys only. Remove if you want to SSH using password (not recommended)
      PasswordAuthentication = false;
    };
  };

  # Increase open file limit for sudoers
  security.pam = {
    services = { swaylock = { }; };
    loginLimits = [
      {
        domain = "@wheel";
        item = "nofile";
        type = "soft";
        value = "524288";
      }
      {
        domain = "@wheel";
        item = "nofile";
        type = "hard";
        value = "1048576";
      }
    ];
  };

  # List packages installed in system profile. To search, run:
  # $ nix search wget
  environment.systemPackages = with pkgs;
    [
      wget
      ripgrep
      fd
      gojq
      socat
      cachix
      librewolf
      lf
      gcc
      gdb
      llvm
      xclip
      xsel
      wl-clipboard
      lesspass-cli
      clang
      p7zip
      pciutils
      tree
      rar
      unzip
      zip
      opencc
      kotatogram-desktop
      libsForQt5.fcitx5-qt
      luajit
      neovim-unwrapped
      tealdeer
      rnix-lsp
      clang-tools
      lua-language-server
      bat
      exa
      fzf
      file
      protobuf
      config.nur.repos.linyinfeng.icalingua-plus-plus
      vscode-fhs
      ark
      iptables
      (
        let my-python-packages = python-packages: with python-packages; [
          pandas
          requests
          pyyaml
          python-lsp-server
          yapf
        ];
        in python3.withPackages my-python-packages
      )
      virt-manager
      rtmpdump
      go
      jdk
      gradle
      (rust-bin.stable.latest.default.override {
        extensions = [ "rust-src" ];
        targets = [ "wasm32-unknown-unknown" ];
      })
      cpt
      cpt-fetcher
    ];

  # https://nixos.wiki/wiki/FAQ/When_do_I_update_stateVersion
  system.stateVersion = "22.11";
}
