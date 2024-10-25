{ colors, fonts }:
''
  $color-base00: ${colors.base00};
  $color-base01: ${colors.base01};
  $color-base02: ${colors.base02};
  $color-base03: ${colors.base03};
  $color-base04: ${colors.base04};
  $color-base05: ${colors.base05};
  $color-base06: ${colors.base06};
  $color-base07: ${colors.base07};
  $color-base08: ${colors.base08};
  $color-base09: ${colors.base09};
  $color-base0A: ${colors.base0A};
  $color-base0B: ${colors.base0B};
  $color-base0C: ${colors.base0C};
  $color-base0D: ${colors.base0D};
  $color-base0E: ${colors.base0E};
  $color-base0F: ${colors.base0F};

  .bar {
    background-color: $color-base01;
    // border-bottom: 2px solid $color-base0D;
    color: $color-base06;
    font-size: 16px;
    font-family: '${fonts.monospace.name}', monospace;
  }

  .left {
    margin-left: 1em;
  }

  .right {
    margin-right: 1em;
  }

  .right>* {
    margin-left: 1em;
    border-bottom: 2px solid $color-base03;
  }

  .workspace {
    all: unset;
    min-width: 2.5em;
    border-bottom: 2px solid transparent;
  }

  .workspace-inactive {
    /* display: none; */
    /* border-bottom: 2px solid $color-base03; */
  }

  .workspace-active {
    border-bottom: 2px solid $color-base07;
  }

  .workspace-empty .workspace-text {
    color: $color-base03;
  }

  .net-speed {
    >* {
      margin-right: 0.5em;
    }
    :last-child {
      margin-right: 0em;
    }
  }

  .ip {
    >* {
      margin-right: 0.5em;
    }
    :last-child {
      margin-right: 0em;
    }
  }
''
