{
  console = {
    earlySetup = true;
    useXkbConfig = true; # use xkbOptions in tty.
  };

  services.xserver = {
    xkb = {
      layout = "us(workman-p),us";
      options = "ctrl:nocaps";
      extraLayouts = {
        qwerty_aberter = {
          description = "QWERTY (Aberter modified)";
          languages = [ "eng" ];
          symbolsFile = ./xkb-keymaps/qwerty;
        };
        workman_aberter = {
          description = "Workman (Aberter modified)";
          languages = [ "eng" ];
          symbolsFile = ./xkb-keymaps/workman;
        };
      };
    };
  };
}
