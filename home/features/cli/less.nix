{
  programs.less = {
    enable = true;
    config = ''
      # --- Workman-like Movement (from Neovim 'n', 'e', 'o', 'i') ---
      # Neovim 'h' (left) is 'n' in Workman. Less equivalent: left-scroll.
      n          left-scroll
      # Neovim 'j' (down) is 'e' in Workman. Less equivalent: forw-line.
      e          forw-line
      # Neovim 'k' (up) is 'o' in Workman. Less equivalent: back-line.
      o          back-line
      # Neovim 'l' (right) is 'i' in Workman. Less equivalent: right-scroll.
      i          right-scroll

      # --- Larger Movement (from Neovim 'N', 'E', 'O', 'I' for 5-unit moves) ---
      # These are mapped to half-screen/full-screen moves in less,
      # as less doesn't have direct "move 5 lines" without a digit prefix.
      N          back-scroll    # Neovim 'N' (5h) -> half page up
      E          forw-scroll    # Neovim 'E' (5j) -> half page down
      O          back-screen    # Neovim 'O' (5k) -> full page up
      I          forw-screen    # Neovim 'I' (5l) -> full page down

      # --- Disable original less h,j,k,l and H,J,K,L to avoid conflict/confusion with Workman layout ---
      # These keys are remapped in the user's Neovim config, so they should not perform
      # their default less actions. Setting to 'invalid' will make less beep.
      h          invalid
      j          repeat-search
      k          invalid
      l          invalid
      H          invalid        # Original less 'H' (home) is not used.
      J          reverse-search # Original less 'J' (forw-line-force) is not used.
      K          invalid        # Original less 'K' (back-line-force) is not used.
      L          invalid        # Original less 'L' (repaint) is not used.


      # --- Search and Highlight ---
      # Neovim: <leader><cr> to clear search highlight.
      # Less: \40 is space (your leader key), \n is newline (carriage return/enter).
      \40\n      clear-search

      # --- File/Tab Management (Neovim tabs -> Less files) ---
      # Less: <leader>te to next file
      \40te      next-file
      # Less: <leader>to to previous file
      \40to      prev-file
      # Less: <leader>tn to examine (open new file).
      # Note: 'examine' requires typing a filename after pressing the key sequence.
      # It does not open an empty buffer like Neovim's :tabnew.
      \40tn      examine

      # --- Command Line ---
      # Neovim: ; to enter command line. Less automatically enters command mode for certain keys (e.g., /, ?, :, !).
      # Mapping ; to 'status' is a common command to show file information.
      ;          status

      # --- Increment/Decrement ---
      # Neovim: _ for decrement, + for increment. Less has no direct equivalent for number manipulation.
      # Map to 'noaction' to prevent unintended default less actions.
      _          noaction
      +          noaction

      # --- Function Keys ---
      # Neovim: <f1> to <nop>.
      \k1        noaction       # F1 key

      # --- Essential Less Defaults (retained or re-mapped if conflicted) ---
      # These are important less commands not directly covered by the above mappings,
      # or where the user's Neovim config doesn't provide an alternative.
      # They ensure basic less functionality remains accessible.

      # Basic line movement (default less keys)
      \r         forw-line
      \n         forw-line
      ^E         forw-line
      ^N         forw-line
      \kd        forw-line      # Down Arrow
      ^Y         back-line
      ^K         back-line
      ^P         back-line
      \ku        back-line      # Up Arrow

      # Basic screen/scroll movement (default less keys)
      d          forw-scroll
      ^D         forw-scroll
      u          back-scroll
      ^U         back-scroll
      \40        forw-screen    # Space (default for page down)
      f          forw-screen
      ^F         forw-screen
      ^V         forw-screen
      \kD        forw-screen    # Page Down
      b          back-screen
      ^B         back-screen
      \ev        back-screen
      \kU        back-screen    # Page Up

      # Horizontal scrolling (default less keys)
      \e(        left-scroll
      \e)        right-scroll
      \kl        left-scroll    # Left Arrow
      \kr        right-scroll   # Right Arrow

      # Other navigation
      g          goto-line
      \kh        goto-line      # Home
      <          goto-line
      \e<        goto-line
      G          goto-end
      \e>        goto-end
      >          goto-end
      \ke        goto-end       # End
      \eG        goto-end-buffered

      # Search (default less keys)
      /          forw-search
      ?          back-search
      \e/        forw-search *
      \e?        back-search *
      \en        repeat-search-all  # 'n' is remapped, use Alt+n for repeat-search-all
      \eN        reverse-search-all # 'N' is remapped, use Alt+N for reverse-search-all

      # Marks
      m          set-mark
      M          set-mark-bottom
      \em        clear-mark
      '          goto-mark
      ^X^X       goto-mark

      # Other commands
      p          percent
      %          percent
      =          status
      ^G         status
      :f         status
      &          filter
      v          visual
      !          shell
      \#         pshell         # Use backslash to escape hash for the action
      H          help           # User's Neovim maps H to help, so retain this.
      V          version
      -          toggle-option

      # Quit (default less keys)
      q          quit
      Q          quit
      :q         quit
      :Q         quit
      ZZ         quit
    '';
  };
}
