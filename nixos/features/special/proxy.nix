{
  pkgs,
  config,
  outputs,
  ...
}:
{
  imports = [
    outputs.nixosModules.mieru
  ];

  services.dae = {
    enable = true;
    assets = with pkgs; [
      v2ray-geoip
      v2ray-domain-list-community
    ];
    config = ''
      global {
        # 绑定到 LAN 和/或 WAN 接口。将下述接口替换成你自己的接口名。
        lan_interface: virbr0
        wan_interface: auto # 使用 "auto" 自动侦测 WAN 接口。

        log_level: info
        allow_insecure: false
        auto_config_kernel_parameter: true

        tcp_check_url: 'http://cp.cloudflare.com,1.1.1.1,2606:4700:4700::1111'
        udp_check_dns: 'dns.google:53,8.8.8.8,2001:4860:4860::8888'
      }

      # Use alidns for all DNS queries and fallback to googledns if pollution result detected.
      dns {
        upstream {
          cloudflaredns: 'tcp+udp://one.one.one.one:53'
          googledns: 'tcp+udp://dns.google:53'
          alidns: 'udp://dns.alidns.com:53'
        }
        routing {
          # According to the request of dns query, decide to use which DNS upstream.
          # Match rules from top to bottom.
          request {
            # fallback is also called default.
            fallback: alidns
          }
          # According to the response of dns query, decide to accept or re-lookup using another DNS upstream.
          # Match rules from top to bottom.
          response {
            # Trusted upstream. Always accept its result.
            upstream(googledns) -> accept
            # Possibly polluted, re-lookup using googledns.
            ip(geoip:private) && !qname(geosite:cn) -> googledns
            # fallback is also called default.
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
        pname(mieru) -> must_direct

        # Put it in the front to prevent broadcast, multicast and other packets that should be sent to the LAN from being
        # forwarded by the proxy.
        # "dip" means destination IP.
        dip(224.0.0.0/3, 'ff00::/8') -> direct

        dip(172.3.10.0/24) -> direct

        dip(43.167.166.174) -> direct

        domain(geosite:microsoft) -> proxy
        domain(suffix: hoyoverse.com) -> proxy
        domain(suffix: gamersky.com) -> proxy
        domain(suffix: yuanshen.com) -> proxy

        domain(geosite:category-ads-all) -> block
        domain(suffix: appcenter.ms) -> block
        domain(suffix: app-measurement.com) -> block
        domain(suffix: firebase.io) -> block
        domain(suffix: crashlytics.com) -> block
        domain(suffix: google-analytics.com) -> block

        # Disable h3 because it usually consumes too much cpu/mem resources.
        l4proto(udp) && dport(443) -> block

        dip(geoip:private) -> direct
        dip(geoip:cn) -> direct
        domain(geosite:cn) -> direct

        fallback: proxy
      }
    '';
  };

  services.mieru = {
    enable = false;
    settings = {
      profiles = [
        {
          _secret = config.age.secrets.mieru.path;
          quote = false;
        }
      ];
      activeProfile = "default";
      rpcPort = 27306; # random generated
      socks5Port = 1080;
      loggingLevel = "WARN";
      socks5ListenLAN = false;
      advancedSettings = {
        noCheckUpdate = true;
      };
    };
  };

  services.sing-box = {
    enable = true;
    settings = {
      inbounds = [
        {
          listen = "127.0.0.1";
          listen_port = 1080;
          sniff_timeout = "300ms";
          tag = "socks-in";
          tcp_fast_open = true;
          type = "socks";
          udp_fragment = true;
          udp_timeout = "5m0s";
        }
      ];
      outbounds = [
        {
          _secret = config.age.secrets.sing-box.path;
          quote = false;
        }
      ];
      route = {
        auto_detect_interface = true;
        final = "proxy";
      };
    };
  };
}
