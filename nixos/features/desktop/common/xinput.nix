{
  environment = {
    variables = {
      MOZ_USE_XINPUT2 = "1";
    };
  };

  services.libinput.enable = true;
  services.libinput.touchpad.tapping = true;
}
