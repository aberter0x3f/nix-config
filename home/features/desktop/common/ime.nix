{ pkgs, ... }:
{
  i18n.inputMethod = {
    enable = true;
    type = "fcitx5";
    fcitx5 = {
      waylandFrontend = true;
      addons = with pkgs; [
        fcitx5-gtk
        fcitx5-nord
        (fcitx5-rime.override {
          rimeDataPkgs = [
            rime-data
            rime-alpha-pinyin
          ];
        })
      ];
      ignoreUserConfig = true;

      settings = {
        inputMethod = {
          GroupOrder."0" = "Default";
          "Groups/0" = {
            Name = "Default";
            "Default Layout" = "us-workman-p";
            DefaultIM = "rime";
          };
          "Groups/0/Items/0".Name = "keyboard-us-workman-p";
          "Groups/0/Items/1".Name = "rime";
        };

        globalOptions = {
          Hotkey = {
            EnumerateWithTriggerKeys = "True";
            AltTriggerKeys = "";
            EnumerateBackwardKeys = "";
            EnumerateSkipFirst = "False";
            EnumerateGroupForwardKeys = "";
            EnumerateGroupBackwardKeys = "";
            TogglePreedit = "";
            ModifierOnlyKeyTimeout = 250;
          };

          "Hotkey/TriggerKeys" = {
            "0" = "Zenkaku_Hankaku";
            "1" = "Hangul";
          };

          "Hotkey/EnumerateForwardKeys" = {
            "0" = "Super+space";
          };

          "Hotkey/ActivateKeys" = {
            "0" = "Hangul_Hanja";
          };

          "Hotkey/DeactivateKeys" = {
            "0" = "Hangul_Romaja";
          };

          "Hotkey/PrevPage" = {
            "0" = "Up";
          };

          "Hotkey/NextPage" = {
            "0" = "Down";
          };

          "Hotkey/PrevCandidate" = {
            "0" = "Shift+Tab";
          };

          "Hotkey/NextCandidate" = {
            "0" = "Tab";
          };

          Behavior = {
            ActiveByDefault = "False";
            resetStateWhenFocusIn = "No";
            ShareInputState = "All";
            PreeditEnabledByDefault = "False";
            ShowInputMethodInformation = "True";
            showInputMethodInformationWhenFocusIn = "False";
            CompactInputMethodInformation = "True";
            ShowFirstInputMethodInformation = "True";
            DefaultPageSize = 5;
            OverrideXkbOption = "False";
            CustomXkbOption = "";
            EnabledAddons = "";
            PreloadInputMethod = "True";
            AllowInputMethodForPassword = "False";
            ShowPreeditForPassword = "False";
            AutoSavePeriod = 30;
          };

          "Behavior/DisabledAddons" = {
            "0" = "chttrans";
            "1" = "clipboard";
            "2" = "emoji";
            "3" = "imselector";
            "4" = "quickphrase";
            "5" = "spell";
            "6" = "unicode";
          };
        };

        addons = {
          classicui.globalSection = {
            "Vertical Candidate List" = "True";
            WheelForPaging = "False";
            Font = "Sans Serif 11";
            MenuFont = "Sans Serif 11";
            TrayFont = "Sans Serif 11";
            TrayOutlineColor = "#000000";
            TrayTextColor = "#ffffff";
            PreferTextIcon = "False";
            ShowLayoutNameInIcon = "True";
            UseInputMethodLanguageToDisplayText = "False";
            Theme = "Nord-Dark";
            DarkTheme = "Nord-Dark";
            UseDarkTheme = "True";
            UseAccentColor = "True";
            PerScreenDPI = "True";
            ForceWaylandDPI = 0;
            EnableFractionalScale = "True";
          };

          keyboard.globalSection = {
            PageSize = 5;
            EnableEmoji = "False";
            EnableQuickPhraseEmoji = "False";
            "Choose Modifier" = "Alt";
            EnableHintByDefault = "False";
            "Hint Trigger" = "";
            "One Time Hint Trigger" = "";
            UseNewComposeBehavior = "True";
            EnableLongPress = "False";
            LongPressBlocklist = "";
          };

          keyboard.sections = {
            PrevCandidate = {
              "0" = "Shift+Tab";
            };
            NextCandidate = {
              "0" = "Tab";
            };
          };
        };
      };
    };
  };
}
