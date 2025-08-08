{
  pkgs,
  config,
  hostName,
  ...
}:

let
  cSpellUserWords = import ./cspell-words.nix;

  baseUserSettings = {
    # --- Workbench & UI Settings ---
    "workbench.colorTheme" = "Nord";
    "workbench.iconTheme" = "material-icon-theme";
    "workbench.sideBar.location" = "right";
    "workbench.startupEditor" = "newUntitledFile";
    "window.titleBarStyle" = "native";
    "window.menuBarVisibility" = "toggle";
    "window.customTitleBarVisibility" = "never";

    # --- Editor Core Settings ---
    "editor.cursorBlinking" = "solid";
    "editor.cursorSmoothCaretAnimation" = "off";
    "editor.fontFamily" =
      "'${config.stylix.fonts.monospace.name}', 'Noto Sans Mono', '${config.stylix.fonts.sansSerif.name}', 'Plangothic P2', 'Plangothic P1', '${config.stylix.fonts.emoji.name}', monospace";
    "editor.fontLigatures" = false;
    "editor.fontSize" = 15;
    "editor.guides.indentation" = false;
    "editor.minimap.enabled" = false;
    "editor.renderWhitespace" = "selection";
    "editor.rulers" = [ 100 ];
    "editor.tabSize" = 2;
    "editor.unicodeHighlight.ambiguousCharacters" = true;
    "editor.wordWrap" = "on";

    # --- Editor Features & Suggestions ---
    "editor.acceptSuggestionOnCommitCharacter" = false;
    "editor.acceptSuggestionOnEnter" = "off";
    "editor.bracketPairColorization.enabled" = true;
    "editor.formatOnPaste" = false;
    "editor.formatOnSave" = true;
    "editor.inlayHints.enabled" = "off";
    "editor.inlineSuggest.enabled" = true;
    "editor.snippetSuggestions" = "top";
    "editor.suggest.preview" = true;

    # --- File Settings ---
    "files.associations" = {
      ".clang-format" = "yaml";
    };
    "files.autoGuessEncoding" = true;
    "files.hotExit" = "onExitAndWindowClose";

    # --- Search Settings ---
    "search.exclude" = {
      "**/node_modules" = true;
      "**/bower_components" = true;
      "build/" = true;
      "temp/" = true;
      "library/" = true;
      "**/*.anim" = true;
      "**/*.meta" = true;
    };

    # --- Terminal Settings ---
    "terminal.integrated.defaultProfile.linux" = "zsh";
    "terminal.integrated.fontSize" = 15;
    "terminal.integrated.profiles.linux" = {
      bash = {
        path = "bash";
        icon = "terminal-bash";
      };
      fish = {
        path = "fish";
      };
      pwsh = {
        path = "pwsh";
        icon = "terminal-powershell";
      };
      tmux = {
        path = "tmux";
        icon = "terminal-tmux";
      };
      xonsh = {
        path = "xonsh";
      };
      zsh = {
        path = "zsh";
      };
    };

    # --- Explorer Settings ---
    "explorer.confirmDelete" = false;

    # --- Git Settings ---
    "git.enableSmartCommit" = true;

    # --- Security Settings ---
    "security.workspace.trust.untrustedFiles" = "open";

    # --- Extension Management ---
    "extensions.ignoreRecommendations" = true;

    "extensions.experimental.affinity" = {
      "asvetliakov.vscode-neovim" = 1;
    };

    # --- Specific Extension Settings ---
    "cSpell.language" = "en,en-GB,en-US,lorem";
    "cSpell.userWords" = cSpellUserWords; # Assuming cSpellUserWords is defined elsewhere

    "commentTranslate.hover.enabled" = false;
    "commentTranslate.targetLanguage" = "en";

    "evenBetterToml.semanticTokens" = true;

    "indentRainbow.colors" = [
      "rgba(255,255,255,0.05)"
      "transparent"
    ];

    "markdown.preview.scrollEditorWithPreview" = false;

    "nix.enableLanguageServer" = true;
    "nix.serverPath" = "nixd";
    "nix.serverSettings" = {
      nixd = {
        formatting = {
          command = [ "nixfmt" ];
        };
        options = {
          nixos = {
            expr = "(builtins.getFlake (builtins.toString ./.)).nixosConfigurations.${hostName}.options";
          };
          home-manager = {
            expr = "(builtins.getFlake (builtins.toString ./.)).nixosConfigurations.${hostName}.options.home-manager.users.type.getSubOptions []";
          };
        };
      };
    };

    "redhat.telemetry.enabled" = false;

    # --- Language-specific Settings ---
    "[markdown]" = {
      "editor.defaultFormatter" = "esbenp.prettier-vscode";
      "editor.quickSuggestions" = {
        comments = "off";
        strings = "off";
        other = "off";
      };
      "editor.wordWrap" = "on";
    };

    "[yaml]" = {
      "editor.defaultFormatter" = "esbenp.prettier-vscode";
    };

    "[html]" = {
      "editor.defaultFormatter" = "esbenp.prettier-vscode";
    };

    "[css][scss]" = {
      "editor.defaultFormatter" = "esbenp.prettier-vscode";
    };

    "[javascript][typescript]" = {
      "editor.defaultFormatter" = "esbenp.prettier-vscode";
      "editor.codeActionsOnSave" = {
        "source.fixAll.eslint" = "explicit";
      };
    };
  };

  # 定义所有 profile 的通用插件
  baseExtensions = with pkgs.vscode-extensions; [
    ms-vscode-remote.remote-ssh
    usernamehw.errorlens
    oderwat.indent-rainbow
    arcticicestudio.nord-visual-studio-code
    pkief.material-icon-theme
    editorconfig.editorconfig
    jnoortheen.nix-ide
    redhat.vscode-yaml
    jock.svg
    # mkxml.vscode-filesize
    streetsidesoftware.code-spell-checker
    # kdl-org.vscode-kdl
    bierner.markdown-preview-github-styles
    bierner.markdown-checkbox
    bierner.markdown-footnotes
    bierner.markdown-mermaid
    tamasfe.even-better-toml
    asvetliakov.vscode-neovim
    # github.copilot
    intellsmi.comment-translate
    esbenp.prettier-vscode
  ];

  # 用于创建派生 profile 的函数
  # 它将合并 base 的设置和插件，并允许添加或覆盖
  mkDerivedProfile =
    {
      extensions ? [ ],
      userSettings ? { },
    }:
    baseProfileSettings
    // {
      enableExtensionUpdateCheck = null;
      enableUpdateCheck = null;
      extensions = baseProfileSettings.extensions ++ extensions;
      userSettings = baseProfileSettings.userSettings // userSettings;
    };

  # 实际的 Base profile 定义，它将作为其他 profile 的基础
  baseProfileSettings = {
    enableExtensionUpdateCheck = false;
    enableUpdateCheck = false;
    extensions = baseExtensions;
    userSettings = baseUserSettings;
  };

in
{
  programs.vscode = {
    enable = true;
    package = pkgs.vscodium; # 使用 VSCodium
    mutableExtensionsDir = false; # 推荐设置为 false，由 Nix 管理扩展

    profiles = {
      default = baseProfileSettings; # 基础 Profile

      rust = mkDerivedProfile {
        extensions = with pkgs.vscode-extensions; [
          rust-lang.rust-analyzer
          vadimcn.vscode-lldb
        ];
        userSettings = {
          "rust-analyzer.lens.implementations.enable" = true;
        };
      };

      cpp = mkDerivedProfile {
        extensions = with pkgs.vscode-extensions; [
          llvm-vs-code-extensions.vscode-clangd
          vadimcn.vscode-lldb
        ];
        # C++ 特定设置，例如格式化工具路径等
        # "C_Cpp.clang_format_path" = "${pkgs.clang}/bin/clang-format";
      };

      frontend = mkDerivedProfile {
        extensions = with pkgs.vscode-extensions; [
          unifiedjs.vscode-mdx
          dbaeumer.vscode-eslint
        ];
        # 前端特定设置，例如 Node.js 路径等
      };

      typst = mkDerivedProfile {
        extensions = with pkgs.vscode-extensions; [
          myriad-dreamin.tinymist
        ];
        userSettings = {
          "tinymist.fontPaths" = [ "/run/current-system/sw/share/X11/fonts" ];
          "tinymist.formatterMode" = "typstyle";
          "tinymist.formatterPrintWidth" = 100;
          "tinymist.lint.enabled" = true;
          "tinymist.preview.scrollSync" = "onSelectionChange";
          "[typst]" = {
            "editor.defaultFormatter" = "myriad-dreamin.tinymist";
          };
        };
      };
    };
  };
}
