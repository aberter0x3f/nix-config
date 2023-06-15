{ pkgs, lib, config, ... }:

let
  swaylock = "${config.programs.swaylock.package}/bin/swaylock";
  pactl = "${pkgs.pulseaudio}/bin/pactl";
  pgrep = "${pkgs.procps}/bin/pgrep";
  playerctl = "${pkgs.playerctl}/bin/playerctl";

  isLocked = "${pgrep} -x ${swaylock}";
  actionLock = "${swaylock} --daemonize";

  lockTime = 4 * 60;
in
{
  services.swayidle = {
    enable = true;
    events = [
      { event = "before-sleep"; command = "${playerctl} pause"; }
      { event = "before-sleep"; command = actionLock; }
    ];
    timeouts = [
      { timeout = lockTime; command = actionLock; }
    ];
  };
}
