{ pkgs, ... }:
{
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
          "SarasaMonoSC Nerd Font"
          "Noto Sans Mono"
          "Sarasa UI SC"
          "Plangothic P2"
          "Plangothic P1"
        ];
        sansSerif = [
          "Sarasa UI SC"
          "Noto Sans"
          "Plangothic P2"
          "Plangothic P1"
        ];
        serif = [
          "Source Han Serif SC"
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
            <string>brave</string>
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
            <string>brave</string>
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
      sarasa-gothic-mod
      source-han-serif
      # kulia-mono
      # commit-mono
      sarasa-ubuntu-mono
      pkgs.nur.repos.xddxdd.plangothic-fonts.allideo
    ];
  };
}
