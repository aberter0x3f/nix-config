{
  console = {
    earlySetup = true;
    useXkbConfig = true; # use xkbOptions in tty.
  };

  services.xserver = {
    xkb = {
      layout = "us";
      variant = "workman-p";
      options = "ctrl:nocaps";
    };
  };
}
