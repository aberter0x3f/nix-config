{
  pkgs,
  config,
  inputs,
  lib,
  ...
}:

{
  imports = [
    inputs.impermanence.nixosModules.impermanence

    ../../global
    ../../features/desktop/gnome.nix
    ../../features/special/podman.nix
    ./hardware-configuration.nix
    ./home.nix

    (import ../../features/special/proxy.nix "auto")
  ];

  nixpkgs = {
    config = {
      allowUnfreePredicate =
        pkg:
        builtins.elem (lib.getName pkg) [
          "davinci-resolve-studio"
        ];
    };
  };

  networking = {
    hostName = "aberter-thinkstation";
    networkmanager = {
      enable = true;
      wifi.powersave = false;
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

  # auto login
  services.displayManager.autoLogin.enable = true;
  services.displayManager.autoLogin.user = "aberter";

  systemd.services."getty@tty1".enable = false;
  systemd.services."autovt@tty1".enable = false;

  services.logind.extraConfig = ''
    IdleAction=ignore
    HandleLidSwitch=ignore
  '';

  users.mutableUsers = false;
  users.users =
    let
      pub-keys = import ../../../secrets/pub-keys.nix;
    in
    {
      root = {
        hashedPasswordFile = config.age.secrets.passwd.path;
        openssh.authorizedKeys.keys = pub-keys.users;
      };
      aberter = {
        isNormalUser = true;
        hashedPasswordFile = config.age.secrets.passwd.path;
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

  services.openssh = {
    enable = true;
    settings = {
      PermitRootLogin = "yes";
      PasswordAuthentication = false;
    };
    hostKeys = [
      {
        path = "/etc/ssh/ssh_host_ed25519_key";
        type = "ed25519";
      }
      {
        path = "/etc/ssh/ssh_host_rsa_key";
        type = "rsa";
        bits = "4096";
      }
    ];
  };

  services.sunshine = {
    enable = true;
    autoStart = true;
    capSysAdmin = true;
    openFirewall = true;
  };

  environment.systemPackages = with pkgs; [
    neovim-unwrapped
    wget
  ];

  programs.fuse.userAllowOther = true;

  environment.persistence."/persistent" = {
    enable = true;
    hideMounts = true;
    directories = [
      "/var/log"
      "/var/cache"
      "/var/lib/bluetooth"
      "/var/lib/nixos"
      "/var/lib/systemd/coredump"
      "/etc/NetworkManager/system-connections"
      "/etc/nixos"
      {
        directory = "/var/lib/colord";
        user = "colord";
        group = "colord";
        mode = "u=rwx,g=rx,o=";
      }
    ];
    files = [
      "/etc/machine-id"
      "/etc/ssh/ssh_host_ed25519_key"
      "/etc/ssh/ssh_host_ed25519_key.pub"
      "/etc/ssh/ssh_host_rsa_key"
      "/etc/ssh/ssh_host_rsa_key.pub"
    ];

    users.aberter = {
      directories = [
        "Downloads"
        "distros" # https://github.com/nix-community/impermanence/issues/165
        "persistent"
        ".gnupg"
        ".ssh"
        ".nixops"
        ".cache"
        ".config/sunshine"
        ".local/share/direnv"
        ".local/share/fcitx5/rime"
        ".local/share/keyrings"
        ".local/share/containers"
        ".local/share/PrismLauncher"
        ".local/share/DaVinciResolve"
        # {
        #   directory = ".local/share/containers";
        #   method = "symlink";
        # }
      ];
    };
  };

  age.identityPaths = [
    "/persistent/etc/ssh/ssh_host_ed25519_key"
    "/persistent/etc/ssh/ssh_host_rsa_key"
  ];

  system.stateVersion = "25.05";
}
