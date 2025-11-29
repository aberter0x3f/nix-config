{
  config,
  inputs,
  pkgs,
  ...
}:

{
  programs.zed-editor = {
    enable = true;
    package = pkgs.unstable.zed-editor;
    installRemoteServer = false; # As client only.

    userSettings = {
      # --- VIM Mode ---
      vim_mode = true;
      vim = {
        use_smartcase_find = true;
      };

      # --- Workbench & UI Settings ---
      theme = {
        mode = "dark";
        dark = "Nord Dark";
        light = "Nord Light";
      };
      project_panel.dock = "right";
      collaboration_panel.button = false;
      cursor_blink = false;

      buffer_font_family = config.stylix.fonts.monospace.name;
      buffer_font_fallbacks = [
        "Noto Sans Mono"
        config.stylix.fonts.sansSerif.name
        "Plangothic P2"
        "Plangothic P1"
        config.stylix.fonts.emoji.name
      ];
      buffer_font_features.calt = false;
      buffer_font_size = 14;
      buffer_line_height = "standard";

      ui_font_family = config.stylix.fonts.monospace.name;
      ui_font_fallbacks = [
        "Noto Sans Mono"
        config.stylix.fonts.sansSerif.name
        "Plangothic P2"
        "Plangothic P1"
        config.stylix.fonts.emoji.name
      ];
      ui_font_size = 15;

      minimap.show = "never";
      show_whitespaces = "selection";
      show_wrap_guides = true;
      wrap_guides = [ 100 ];
      tab_size = 2;
      format_on_save = "on";
      use_on_type_format = false;
      formatter = "language_server";
      inlay_hints.enabled = false;
      show_edit_predictions = true;
      snippet_sort_order = "top";
      session.restore_unsaved_buffers = true;
      extend_comment_on_newline = false;

      journal = {
        path = "~";
        hour_format = "hour24";
      };

      title_bar = {
        show_onboarding_banner = false;
        show_user_picture = false;
        show_sign_in = false;
      };

      # --- Search Settings ---
      file_scan_exclusions = [
        "**/.git"
        "**/.svn"
        "**/.hg"
        "**/.jj"
        "**/.repo"
        "**/CVS"
        "**/.DS_Store"
        "**/Thumbs.db"
        "**/.classpath"
        "**/.settings"
        "**/node_modules"
        "**/bower_components"
        "**/*.anim"
        "**/*.meta"
      ];

      # --- Terminal Settings ---
      terminal = {
        line_height = "standard";
        shell = {
          program = "zsh";
        };
      };

      # --- Telemetry Settings ---
      telemetry = {
        diagnostics = false;
        metrics = false;
      };

      # --- Nix Specific ---
      auto_update = false;
      language_servers = [ ]; # Manage langauge servers manually

      # --- Language-specific Settings ---
      lsp = {
        nil.initialization_options.formatting.command = [ "nixfmt" ];
      };

      languages = {
        C = {
          format_on_save = "on";
          language_servers = [ "clangd" ];
        };
        "C++" = {
          format_on_save = "on";
          language_servers = [ "clangd" ];
        };
        Rust = {
          language_servers = [ "rust-analyzer" ];
        };
        Nix = {
          language_servers = [ "nil" ];
        };
        Markdown = {
          formatter = "prettier";
          soft_wrap = "editor_width";
        };
        Typst = {
          soft_wrap = "editor_width";
          language_servers = [ "tinymist" ];
        };
        JSON = {
          formatter = "prettier";
          language_servers = [ "json-language-server" ];
        };
        YAML = {
          formatter = "prettier";
        };
        TOML = {
          language_servers = [ "tombi" ];
        };
        HTML = {
          formatter = "prettier";
        };
        CSS = {
          formatter = "prettier";
        };
        SCSS = {
          formatter = "prettier";
        };
        JavaScript = {
          formatter = "prettier";
          code_actions_on_format."source.fixAll.eslint" = true;
        };
        TypeScript = {
          formatter = "prettier";
          code_actions_on_format."source.fixAll.eslint" = true;
        };
        CSharp = {
          language_servers = [ "omnisharp" ];
        };
      };
    };

    userKeymaps = [
      {
        context = "VimControl && !menu";
        bindings = {
          # --- 移动键 (n, e, o, i) ---
          "n" = "vim::Left";
          "e" = "vim::Down";
          "o" = "vim::Up";
          "i" = "vim::Right";

          # --- 快速移动 (N, E, O, I) ---
          "N" = [
            "workspace::SendKeystrokes"
            "5 n"
          ];
          "E" = [
            "workspace::SendKeystrokes"
            "5 e"
          ];
          "O" = [
            "workspace::SendKeystrokes"
            "5 o"
          ];
          "I" = [
            "workspace::SendKeystrokes"
            "5 i"
          ];

          # --- 反向映射 (h, j, k, l) ---
          # h -> i (insert)
          "h" = [
            "vim::PushObject"
            { "around" = false; }
          ];
          "j" = "vim::MoveToNextMatch"; # j -> n (next search match)
          "k" = "vim::NextWordEnd"; # k -> e (end of word)
          "l" = "vim::InsertLineBelow"; # l -> o (open line below)

          # --- 反向映射大写 (H, J, K, L) ---
          "H" = "vim::InsertFirstNonWhitespace"; # H -> I (Insert at begin of line)
          "J" = "vim::MoveToPreviousMatch"; # J -> N (prev search match)
          "K" = "vim::NextWordEnd"; # K -> E (end of WORD)
          "L" = "vim::InsertLineAbove"; # L -> O (open line above)

          # --- 窗口/窗格 (Pane) 导航 ---
          "ctrl-w n" = "workspace::ActivatePaneLeft";
          "ctrl-w e" = "workspace::ActivatePaneDown";
          "ctrl-w o" = "workspace::ActivatePaneUp";
          "ctrl-w i" = "workspace::ActivatePaneRight";
          "ctrl-w ctrl-n" = "workspace::ActivatePaneLeft";
          "ctrl-w ctrl-e" = "workspace::ActivatePaneDown";
          "ctrl-w ctrl-o" = "workspace::ActivatePaneUp";
          "ctrl-w ctrl-i" = "workspace::ActivatePaneRight";

          # --- 移动当前窗格 ---
          "ctrl-w N" = "workspace::SwapPaneLeft";
          "ctrl-w E" = "workspace::SwapPaneDown";
          "ctrl-w O" = "workspace::SwapPaneUp";
          "ctrl-w I" = "workspace::SwapPaneRight";

          # --- 窗格分割 ---
          "space s n" = "pane::SplitLeft";
          "space s e" = "pane::SplitDown";
          "space s o" = "pane::SplitUp";
          "space s i" = "pane::SplitRight";

          # --- 标签页 (Tab) 管理 ---
          "space t n" = "workspace::NewFile";
          "space t e" = "pane::ActivateNextItem";
          "space t o" = "pane::ActivatePreviousItem";

          # --- LSP 和代码导航 ---
          "g d" = "editor::GoToDefinition";
          "g D" = "editor::GoToDeclaration";
          "D" = "editor::Hover";
          "g i" = "editor::GoToImplementation";
          "R" = "editor::Rename";
          "Q" = "editor::ToggleCodeActions"; # Quick Fix
          "g r" = "editor::FindAllReferences";
          "g E" = "editor::GoToPreviousDiagnostic"; # marker.prev
          "g e" = "editor::GoToDiagnostic"; # marker.next

          # --- 其他通用映射 ---
          "<" = "editor::Outdent";
          ">" = "editor::Indent";
          "space space" = [
            "workspace::SendKeystrokes"
            "v h w"
          ];
          ";" = "command_palette::Toggle";
          "_" = "vim::Decrement";
          "+" = "vim::Increment";

          # --- 禁用 F1 ---
          "f1" = null;
        };
      }
      {
        context = "vim_mode == normal";
        bindings = {
          "h" = "vim::InsertBefore";
          "U" = "editor::Redo";
        };
      }
      {
        context = "vim_mode == visual";
        bindings = {
          "h" = [
            "vim::PushObject"
            { "around" = false; }
          ];
        };
      }
      {
        context = "vim_mode == insert";
        bindings = {
          "f1" = null;
        };
      }
    ];

    extensions = [
      "html"
      "nix"
      "nord"
      "typst"
      "tombi" # toml
      "php"
      "dockerfile"
      "make"
      "csharp"
      "git-firefly"
    ];
  };
}
