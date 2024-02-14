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

      permittedInsecurePackages = [
        "python3.10-requests-2.29.0"
        "python3.10-cryptography-40.0.2"
        "python3.11-requests-2.29.0"
        "python3.11-cryptography-40.0.2"
      ];
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
        "https://mirrors.cernet.edu.cn/nix-channels/store"
      ];

      trusted-users = [ "root" "yzy1" ];
    };

  };

  networking = {
    hostName = "yzy1-thinkbook";
    networkmanager.enable = true; # Easiest to use and most distros use this by default.
    firewall.enable = false;

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

  # Set your time zone.
  time.timeZone = "Asia/Shanghai";

  # Select internationalisation properties.
  i18n = rec {
    defaultLocale = "en_XX.UTF-8@POSIX";
    supportedLocales = [ "en_XX.UTF-8@POSIX/UTF-8" "en_CA.UTF-8/UTF-8" "C.UTF-8/UTF-8" "zh_CN.UTF-8/UTF-8" ];
    extraLocaleSettings = {
      LANGUAGE = "en_XX.UTF-8@POSIX:en_CA:en:C";
      LC_CTYPE = "en_CA.UTF-8";
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
        ];
      };
    };
  };

  fonts = {
    fontDir.enable = true;
    fontconfig = {
      enable = true;
      antialias = true;
      hinting.enable = true;
      subpixel.lcdfilter = "default";
      defaultFonts = {
        emoji = [ "Noto Color Emoji" ];
        monospace = [
          "CommitMono Nerd Font"
          "Noto Sans Mono"
          "Redfish Sans"
          "Plangothic P2"
          "Plangothic P1"
        ];
        sansSerif = [
          "RedFish Sans"
          "Noto Sans"
          "Plangothic P2"
          "Plangothic P1"
        ];
        serif = [
          "RedFish Serif"
          "Noto Serif"
          "Plangothic P2"
          "Plangothic P1"
        ];
      };
      localConf = ''
        <?xml version="1.0"?>
        <!DOCTYPE fontconfig SYSTEM "urn:fontconfig:fonts.dtd">
        <fontconfig>

        <alias>
          <family>-apple-system</family>
          <prefer>
            <family>sans-serif</family>
          </prefer>
        </alias>

        <alias>
          <family>BlinkMacSystemFont</family>
          <prefer>
            <family>sans-serif</family>
          </prefer>
        </alias>

        <alias>
          <family>system-ui</family>
          <prefer>
            <family>sans-serif</family>
          </prefer>
        </alias>

        <match>
          <test name="family" compare="eq">
            <string>Twemoji Mozilla</string>
          </test>
          <edit name="family" mode="prepend" binding="strong">
            <string>emoji</string>
          </edit>
        </match>

        <match>
          <test name="family" compare="eq">
            <string>Apple Color Emoji</string>
          </test>
          <edit name="family" mode="prepend" binding="strong">
            <string>emoji</string>
          </edit>
        </match>

        <match>
          <test name="family" compare="contains">
            <string>Courier</string>
          </test>
          <test name="prgname" compare="eq">
            <string>firefox</string>
          </test>
          <edit name="family" mode="prepend" binding="strong">
            <string>monospace</string>
          </edit>
        </match>

        <match>
          <test name="family" compare="contains">
            <string>Courier</string>
          </test>
          <test name="prgname" compare="eq">
            <string>librewolf</string>
          </test>
          <edit name="family" mode="prepend" binding="strong">
            <string>monospace</string>
          </edit>
        </match>

        <match>
          <test name="family" compare="eq">
            <string>Fira Code</string>
          </test>
          <test name="prgname" compare="eq">
            <string>firefox</string>
          </test>
          <edit name="family" mode="prepend" binding="strong">
            <string>monospace</string>
          </edit>
        </match>

        <match>
          <test name="family" compare="eq">
            <string>Fira Code</string>
          </test>
          <test name="prgname" compare="eq">
            <string>librewolf</string>
          </test>
          <edit name="family" mode="prepend" binding="strong">
            <string>monospace</string>
          </edit>
        </match>

        <match target="pattern">
          <test qual="any" name="family" compare="contains">
            <string>Source Code</string>
          </test>
          <edit name="family" mode="prepend" binding="strong">
            <string>monospace</string>
          </edit>
        </match>

        <match>
          <test qual="any" name="family" compare="eq">
            <string>Noto Sans Mono</string>
          </test>
          <edit name="family" mode="prepend" binding="strong">
            <string>monospace</string>
          </edit>
        </match>

        <match>
          <test qual="any" name="family" compare="eq">
            <string>Noto Mono</string>
          </test>
          <edit name="family" mode="prepend" binding="strong">
            <string>monospace</string>
          </edit>
        </match>

        <match target="pattern">
          <test qual="any" name="family" compare="eq">
            <string>Consolas</string>
          </test>
          <edit name="family" mode="prepend" binding="strong">
            <string>monospace</string>
          </edit>
        </match>

        <match>
          <test qual="any" name="family" compare="contains">
            <string>Microsoft YaHei</string>
          </test>
          <edit name="family" mode="prepend" binding="strong">
            <string>sans-serif</string>
          </edit>
        </match>

        <match>
          <test qual="any" name="family" compare="contains">
            <string>Source Han Sans</string>
          </test>
          <edit name="family" mode="prepend" binding="strong">
            <string>sans-serif</string>
          </edit>
        </match>

        <match>
          <test qual="any" name="family" compare="contains">
            <string>Noto Sans</string>
          </test>
          <edit name="family" mode="prepend" binding="strong">
            <string>sans-serif</string>
          </edit>
        </match>

        <match>
          <test qual="any" name="family" compare="contains">
            <string>Source Han Serif</string>
          </test>
          <edit name="family" mode="prepend" binding="strong">
            <string>serif</string>
          </edit>
        </match>

        <match target="pattern">
          <test qual="any" name="family" compare="contains">
            <string>Noto Serif</string>
          </test>
          <edit name="family" mode="prepend" binding="strong">
            <string>serif</string>
          </edit>
        </match>
        </fontconfig>
      '';
    };
    enableDefaultPackages = false;
    packages = with pkgs; [
      noto-fonts
      noto-fonts-color-emoji
      redfish-sans
      redfish-serif
      # kulia-mono
      commit-mono
      config.nur.repos.xddxdd.plangothic-fonts.allideo
      libertinus
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
  services.blueman.enable = true;

  # Configure your system-wide user settings (groups, etc), add more users as needed.
  users.users = {
    yzy1 = {
      isNormalUser = true;
      openssh.authorizedKeys.keys = [
      ];
      subUidRanges = [{ count = 65536; startUid = 524288; }];
      subGidRanges = [{ count = 65536; startGid = 524288; }];
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
    pathsToLink = [ "/share/zsh" ];
  };

  virtualisation.podman = {
    enable = true;
    dockerCompat = true;
    defaultNetwork.settings.dns_enabled = true;
  };
  virtualisation.libvirtd = {
    enable = true;
    qemu.ovmf.enable = true;
  };
  programs.virt-manager.enable = true;

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
    config.common.default = "*";
  };

  # List services that you want to enable:

  # Enable the X11 windowing system.
  services.xserver = {
    enable = true;
    dpi = 144;

    displayManager.startx.enable = true;

    # Configure keymap in X11
    xkb = {
      layout = "us";
      options = "ctrl:nocaps";
    };
  };

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

  services.gnome.gnome-keyring.enable = true;

  services.dae = {
    enable = true;
    assets = with pkgs; [ v2ray-geoip v2ray-domain-list-community ];
    config = ''
      global {
        # 绑定到 LAN 和/或 WAN 接口。将下述接口替换成你自己的接口名。
        lan_interface: virbr0
        wan_interface: auto # 使用 "auto" 自动侦测 WAN 接口。

        log_level: info
        allow_insecure: false
        auto_config_kernel_parameter: true
      }

      # 默认使用 alidns，如果疑似污染使用 googledns 重查。
      dns {
        upstream {
          googledns: 'tcp+udp://dns.google.com:53'
          alidns: 'udp://dns.alidns.com:53'
        }
        routing {
          # 根据 DNS 查询，决定使用哪个 DNS 上游。
          # 按由上到下的顺序匹配。
          request {
            # fallback 意为 default。
            fallback: alidns
          }
          # 根据 DNS 查询的回复，决定接受或使用其他 upstream 重新查询。
          # 按由上到下的顺序匹配。
          response {
            # 可信的 upstream。总是接受它的回复。
            upstream(googledns) -> accept
            # 疑似被污染结果，向 'googledns' 重查。
            ip(geoip:private) && !qname(geosite:cn) -> googledns
            # fallback 意为 default。
            fallback: accept
          }
        }
      }

      node {
        local_socks: 'socks5://localhost:1080'
      }

      group {
        proxy {
          policy: fixed(0)
        }
      }

      # 更多的 Routing 样例见 https://github.com/daeuniverse/dae/blob/main/docs/en/configuration/routing.md
      routing {
        pname(NetworkManager) -> direct
        pname(naiveproxy) -> must_direct
        pname(hysteria) -> must_direct
        pname(hysteria-1) -> must_direct
        pname(sing-box) -> must_direct
        dip(224.0.0.0/3, 'ff00::/8') -> direct

        dip(172.3.10.0/24) -> direct

        domain(suffix: hoyoverse.com) -> proxy
        domain(suffix: gamersky.com) -> proxy
        domain(suffix: yuanshen.com) -> proxy

        domain(geosite:category-ads-all) -> block
        domain(suffix: appcenter.ms) -> block
        domain(suffix: app-measurement.com) -> block
        domain(suffix: firebase.io) -> block
        domain(suffix: crashlytics.com) -> block
        domain(suffix: google-analytics.com) -> block

        dip(geoip:private) -> direct
        dip(geoip:cn) -> direct
        domain(geosite:cn) -> direct

        fallback: proxy
      }
    '';
  };

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

  systemd.services."user@" = {
    overrideStrategy = "asDropin";
    serviceConfig.Delegate = "cpu cpuset io memory pids";
  };

  # List packages installed in system profile. To search, run:
  # $ nix search wget
  environment.systemPackages = with pkgs;
    [
      cachix
      pulseaudio
      virtiofsd
      iptables
      # C & C++
      gcc
      gnumake
      cmake
      pkgconf
      gdb
      llvm
      clang
      # Lua
      luajit
      # Node.js
      nodejs
      corepack
      # Go
      go
      # Java
      jdk
      gradle
      # Python
      (
        let my-python-packages = python-packages: with python-packages; [
          pandas
          requests
          pyyaml
          python-lsp-server
          python-lsp-black
          flake8
          black
        ];
        in python3.withPackages my-python-packages
      )
      # Rust
      (rust-bin.nightly.latest.default.override {
        extensions = [ "rust-src" ];
        targets = [ "wasm32-wasi" "wasm32-unknown-unknown" ];
      })
      # Editor
      neovim-unwrapped
      tree-sitter
    ];

  # https://nixos.wiki/wiki/FAQ/When_do_I_update_stateVersion
  system.stateVersion = "23.11";
}
