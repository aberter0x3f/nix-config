{
  pkgs,
  ...
}:

{
  programs.yazi-new = {
    enable = true;
    package = pkgs.unstable.yazi;
    keymap =
      let
        cursorMoveMaps = [
          {
            on = "o";
            run = "arrow -1";
            desc = "Move cursor up";
          }
          {
            on = "e";
            run = "arrow 1";
            desc = "Move cursor down";
          }
          {
            on = "O";
            run = "arrow -5";
            desc = "Move cursor 5 lines up";
          }
          {
            on = "E";
            run = "arrow 5";
            desc = "Move cursor 5 lines down";
          }
        ];
      in
      {
        manager.prepend_keymap = [
          {
            on = "q";
            run = "close";
            desc = "Close the current tab, or quit if it is last tab";
          }
          # Navigation
          {
            on = "l";
            run = "plugin smart-enter";
            desc = "Enter the child directory, or open the file";
          }
          {
            on = "n";
            run = "leave";
            desc = "Go back to the parent directory";
          }
          {
            on = "i";
            run = "plugin smart-enter";
            desc = "Enter the child directory, or open the file";
          }
          # Seeking
          {
            on = "<C-k>";
            run = "seek -5";
            desc = "Seek up 5 units in the preview";
          }
          {
            on = "<C-j>";
            run = "seek 5";
            desc = "Seek down 5 units in the preview";
          }
          {
            on = "<C-o>";
            run = "seek -5";
            desc = "Seek up 5 units in the preview";
          }
          {
            on = "<C-e>";
            run = "seek 5";
            desc = "Seek down 5 units in the preview";
          }
          # Goto
          {
            on = [
              "g"
              "r"
            ];
            run = "cd /";
            desc = "Go to the root directory";
          }
          {
            on = [
              "g"
              "e"
            ];
            run = "cd /etc";
            desc = "Go to /etc directory";
          }
          {
            on = [
              "g"
              "t"
            ];
            run = "cd /tmp";
            desc = "Go to /tmp directory";
          }
          {
            on = "<C-p>";
            run = "plugin fzf";
            desc = "Jump to a file/directory via fzf";
          }
          {
            on = "<C-g>";
            run = "plugin fr --args='rg'";
            desc = "find file by content";
          }
          # Find
          {
            on = "j";
            run = "find_arrow";
            desc = "Goto the next found";
          }
          {
            on = "j";
            run = "find_arrow --previous";
            desc = "Goto the previous found";
          }
        ] ++ cursorMoveMaps;
        tasks.prepend_keymap = cursorMoveMaps;
        select.prepend_keymap = cursorMoveMaps;
        input.prepend_keymap = cursorMoveMaps;
        completion.prepend_keymap = [
          {
            on = "<C-k>";
            run = "arrow -1";
            desc = "Move cursor up";
          }
          {
            on = "<C-j>";
            run = "arrow 1";
            desc = "Move cursor down";
          }
          {
            on = "<C-o>";
            run = "arrow -1";
            desc = "Move cursor up";
          }
          {
            on = "<C-e>";
            run = "arrow 1";
            desc = "Move cursor down";
          }
        ];
        confirm.prepend_keymap = cursorMoveMaps;
        help.prepend_keymap = cursorMoveMaps;
      };
    settings = {
      plugin = {
        prepend_fetchers = [
          {
            id = "git";
            name = "*";
            run = "git";
          }
          {
            id = "git";
            name = "*/";
            run = "git";
          }
        ];
      };
    };
    plugins =
      let
        pluginSrc = pkgs.fetchFromGitHub {
          owner = "yazi-rs";
          repo = "plugins";
          rev = "a1738e8088366ba73b33da5f45010796fb33221e";
          hash = "sha256-eiLkIWviGzG9R0XP1Cik3Bg0s6lgk3nibN6bZvo8e9o=";
        };
      in
      {
        smart-enter = pluginSrc + "/smart-enter.yazi";
        git = pluginSrc + "/git.yazi";
        starship = pkgs.fetchFromGitHub {
          owner = "Rolv-Apneseth";
          repo = "starship.yazi";
          rev = "c0707544f1d526f704dab2da15f379ec90d613c2";
          hash = "sha256-H8j+9jcdcpPFXVO/XQZL3zq1l5f/WiOm4YUxAMduSRs=";
        };
        fr = pkgs.fetchFromGitHub {
          owner = "lpnh";
          repo = "fr.yazi";
          rev = "92edf0b4bfce831d6b3178117b1aa7d8557f424e";
          hash = "sha256-6PEKX9IOAZwuoTnPXH7UnCOcnmyKsE/gKvkm0T3cS74=";
        };
      };
    initLua = builtins.readFile ./init.lua;
  };
}
