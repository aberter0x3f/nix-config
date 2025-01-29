{
  programs.yazi = {
    enable = true;
    keymap = {
      manager.prepend_keymap = [
        {
          on = "q";
          run = "close";
          desc = "Close the current tab, or quit if it is last tab";
        }
        {
          on = "K";
          run = "arrow -5";
          desc = "Move cursor 5 lines up";
        }
        {
          on = "J";
          run = "arrow 5";
          desc = "Move cursor 5 lines down";
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
      ];
      tasks.prepend_keymap = [
        {
          on = "K";
          run = "arrow -5";
          desc = "Move cursor 5 lines up";
        }
        {
          on = "J";
          run = "arrow 5";
          desc = "Move cursor 5 lines down";
        }
      ];
      select.prepend_keymap = [
        {
          on = "K";
          run = "arrow -5";
          desc = "Move cursor 5 lines up";
        }
        {
          on = "J";
          run = "arrow 5";
          desc = "Move cursor 5 lines down";
        }
      ];
      input.prepend_keymap = [
        {
          on = "H";
          run = "move -5";
          desc = "Move back 5 characters";
        }
        {
          on = "L";
          run = "move 5";
          desc = "Move forward 5 characters";
        }
      ];
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
      ];
      confirm.prepend_keymap = [
        {
          on = "K";
          run = "arrow -5";
          desc = "Move cursor 5 lines up";
        }
        {
          on = "J";
          run = "arrow 5";
          desc = "Move cursor 5 lines down";
        }
      ];
      help.prepend_keymap = [
        {
          on = "K";
          run = "arrow -5";
          desc = "Move cursor 5 lines up";
        }
        {
          on = "J";
          run = "arrow 5";
          desc = "Move cursor 5 lines down";
        }
      ];
    };
  };
}
