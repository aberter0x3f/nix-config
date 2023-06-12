{ colorscheme }:

let inherit (colorscheme) colors;
in
''
  $color-base00: #${colors.base00};
  $color-base01: #${colors.base01};
  $color-base02: #${colors.base02};
  $color-base03: #${colors.base03};
  $color-base04: #${colors.base04};
  $color-base05: #${colors.base05};
  $color-base06: #${colors.base06};
  $color-base07: #${colors.base07};
  $color-base08: #${colors.base08};
  $color-base09: #${colors.base09};
  $color-base0A: #${colors.base0A};
  $color-base0B: #${colors.base0B};
  $color-base0C: #${colors.base0C};
  $color-base0D: #${colors.base0D};
  $color-base0E: #${colors.base0E};
  $color-base0F: #${colors.base0F};

  * {
    all: unset;
  }

  .bar {
    background-color: $color-base01;
    border-bottom: 2px solid $color-base0D;
    color: $color-base05;
    font-size: 16px;
    font-family: 'Sarasa Term SC Nerd Font', monospace;
  }

  .left {
    margin-left: 1em;
  }

  .right {
    margin-right: 1em;
  }

  .right>* {
    padding-left: 1em;
  }

  .ws {
    min-width: 2.5em;
  }
  .ws-bg-text {
    font-size: 26px;
    margin-top: -100px;
    margin-bottom: -100px;
    font-family: "RedFish Sans", sans-serif;
  }
  .ws-text {
    color: $color-base00;
  }
  .ws-active .ws-bg-text {
    color: $color-base0D;
    text-shadow: -1px 0 $color-base05, 0 1px $color-base05, 1px 0 $color-base05, 0 -1px $color-base05;
  }
  .ws-inactive .ws-bg-text {
    color: $color-base04;
    text-shadow: -1px 0 $color-base05, 0 1px $color-base05, 1px 0 $color-base05, 0 -1px $color-base05;
  }
  .ws-empty .ws-bg-text {
    color: $color-base03;
    text-shadow: -1px 0 $color-base04, 0 1px $color-base04, 1px 0 $color-base04, 0 -1px $color-base04;
  }
''
