{
  pkgs,
  ...
}:

{
  programs.yazi = {
    enable = true;
    # package = pkgs.unstable.yazi;
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
        mgr.prepend_keymap = [
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
            run = "plugin fr rg";
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
    plugins = {
      git = pkgs.yaziPlugins.git;
      starship = pkgs.yaziPlugins.starship;
      smart-enter = pkgs.yaziPlugins.smart-enter;
      fr = pkgs.fetchFromGitHub {
        owner = "lpnh";
        repo = "fr.yazi";
        rev = "9e1264965d7cca362dce8c63817268ce46f65184";
        hash = "sha256-1O3qkB/CXXmYvFP5vnNaxq0e00usiTCOG9ZyAIU3Ek4=";
      };
    };
    initLua = builtins.readFile ./init.lua;
  };
}
