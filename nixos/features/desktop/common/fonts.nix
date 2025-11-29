{ pkgs, lib, ... }:
{
  fonts =
    let
      sans = "Sarasa UI SC";
      mono = "SarasaMonoSC Nerd Font";
      serif = "Source Han Serif SC";
    in
    {
      fontDir.enable = true;
      fontconfig = {
        enable = true;
        antialias = true;
        hinting.enable = true;
        subpixel.lcdfilter = "default";
        defaultFonts = {
          emoji = [ "Noto Color Emoji" ];
          monospace = [
            mono
            "Noto Sans Mono"
            "Sarasa UI SC"
            "Plangothic P2"
            "Plangothic P1"
          ];
          sansSerif = [
            sans
            "Noto Sans"
            "Plangothic P2"
            "Plangothic P1"
          ];
          serif = [
            serif
            "Noto Serif"
            "Plangothic P2"
            "Plangothic P1"
          ];
        };
        localConf =
          let
            browsers = [
              "brave"
              "librewolf"
              "firefox"
            ];
            mkBrowserRemap =
              from: to: compare:
              lib.concatMapStringsSep "\n" (b: ''
                <match>
                  <test name="family" compare="contains">
                    <string>${from}</string>
                  </test>
                  <test name="prgname" compare="${compare}">
                    <string>${b}</string>
                  </test>
                  <edit name="family" mode="prepend" binding="strong">
                    <string>${to}</string>
                  </edit>
                </match>
              '') browsers;
          in
          ''
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
                <family>Sarasa UI SC</family>
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

            ${mkBrowserRemap "Courier" mono "eq"}
            ${mkBrowserRemap "Fira Code" mono "eq"}
            ${mkBrowserRemap "Noto Sans Mono" mono "contains"}
            ${mkBrowserRemap "Noto Mono" mono "contains"}
            ${mkBrowserRemap "Consolas" mono "eq"}
            ${mkBrowserRemap "Source Code" mono "contains"}
            ${mkBrowserRemap "Microsoft YaHei" sans "contains"}
            ${mkBrowserRemap "Noto Sans" sans "contains"}
            ${mkBrowserRemap "Source Sans" sans "contains"}
            ${mkBrowserRemap "Source Han Sans" sans "contains"}
            ${mkBrowserRemap "Noto Serif" serif "contains"}
            ${mkBrowserRemap "Source Serif" serif "contains"}
            </fontconfig>
          '';
      };
      enableDefaultPackages = false;
      packages = with pkgs; [
        noto-fonts
        noto-fonts-color-emoji
        sarasa-gothic-mod
        source-han-serif
        source-han-sans
        (ibm-plex.override {
          families = [
            "sans"
            "serif"
            "mono"
            "math"
          ];
        })
        # kulia-mono
        # commit-mono
        sarasa-ubuntu-mono
        pkgs.nur.repos.xddxdd.plangothic-fonts.allideo
      ];
    };
}
