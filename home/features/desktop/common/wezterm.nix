{
  inputs,
  pkgs,
  config,
  ...
}:
{
  home.sessionVariables = {
    TERMINAL = "wezterm";
  };

  stylix.targets.wezterm.enable = true;

  programs.wezterm = {
    enable = true;
    package = inputs.wezterm.packages.${pkgs.system}.default;

    extraConfig = ''
      local wezterm = require "wezterm"
      local config = {}

      if wezterm.config_builder then
        config = wezterm.config_builder()
      end

      function rep_list(value, n)
        local list = {}
        for i = 1, n do
          table.insert(list, value)
        end
        return list
      end

      config.font = wezterm.font_with_fallback {
        { family="${config.stylix.fonts.monospace.name}", weight=450 },
        "Noto Sans Mono",
        "${config.stylix.fonts.sansSerif.name}",
        "Plangothic P2",
        "Plangothic P1",
        "${config.stylix.fonts.emoji.name}",
      }

      config.use_fancy_tab_bar = false
      config.hide_tab_bar_if_only_one_tab = true
      config.tab_bar_at_bottom = true

      local act = wezterm.action
      config.disable_default_key_bindings = true

      config.keys = {}

      config.key_tables = {
        copy_mode = {
          { key = "Tab", mods = "NONE", action = act.CopyMode "MoveForwardWord" },
          { key = "Tab", mods = "SHIFT", action = act.CopyMode "MoveBackwardWord" },
          { key = "Enter", mods = "NONE", action = act.CopyMode "MoveToStartOfNextLine" },
          { key = "Escape", mods = "NONE", action = act.CopyMode "Close" },
          { key = "Space", mods = "NONE", action = act.CopyMode{ SetSelectionMode = "Cell" } },
          { key = "$", mods = "NONE", action = act.CopyMode "MoveToEndOfLineContent" },
          { key = "$", mods = "SHIFT", action = act.CopyMode "MoveToEndOfLineContent" },
          { key = ",", mods = "NONE", action = act.CopyMode "JumpReverse" },
          { key = "0", mods = "NONE", action = act.CopyMode "MoveToStartOfLine" },
          { key = ";", mods = "NONE", action = act.CopyMode "JumpAgain" },
          { key = "F", mods = "NONE", action = act.CopyMode{ JumpBackward = { prev_char = false } } },
          { key = "F", mods = "SHIFT", action = act.CopyMode{ JumpBackward = { prev_char = false } } },
          { key = "G", mods = "NONE", action = act.CopyMode "MoveToScrollbackBottom" },
          { key = "G", mods = "SHIFT", action = act.CopyMode "MoveToScrollbackBottom" },
          { key = "H", mods = "NONE", action = act.Multiple(rep_list(act.CopyMode "MoveLeft", 5)) },
          { key = "H", mods = "SHIFT", action = act.Multiple(rep_list(act.CopyMode "MoveLeft", 5)) },
          { key = "J", mods = "NONE", action = act.Multiple(rep_list(act.CopyMode "MoveDown", 5)) },
          { key = "J", mods = "SHIFT", action = act.Multiple(rep_list(act.CopyMode "MoveDown", 5)) },
          { key = "K", mods = "NONE", action = act.Multiple(rep_list(act.CopyMode "MoveUp", 5)) },
          { key = "K", mods = "SHIFT", action = act.Multiple(rep_list(act.CopyMode "MoveUp", 5)) },
          { key = "L", mods = "NONE", action = act.Multiple(rep_list(act.CopyMode "MoveRight", 5)) },
          { key = "L", mods = "SHIFT", action = act.Multiple(rep_list(act.CopyMode "MoveRight", 5)) },
          { key = "M", mods = "NONE", action = act.CopyMode "MoveToViewportMiddle" },
          { key = "M", mods = "SHIFT", action = act.CopyMode "MoveToViewportMiddle" },
          { key = "O", mods = "NONE", action = act.CopyMode "MoveToSelectionOtherEndHoriz" },
          { key = "O", mods = "SHIFT", action = act.CopyMode "MoveToSelectionOtherEndHoriz" },
          { key = "T", mods = "NONE", action = act.CopyMode{ JumpBackward = { prev_char = true } } },
          { key = "T", mods = "SHIFT", action = act.CopyMode{ JumpBackward = { prev_char = true } } },
          { key = "V", mods = "NONE", action = act.CopyMode{ SetSelectionMode = "Line" } },
          { key = "V", mods = "SHIFT", action = act.CopyMode{ SetSelectionMode = "Line" } },
          { key = "^", mods = "NONE", action = act.CopyMode "MoveToStartOfLineContent" },
          { key = "^", mods = "SHIFT", action = act.CopyMode "MoveToStartOfLineContent" },
          { key = "b", mods = "NONE", action = act.CopyMode "MoveBackwardWord" },
          { key = "b", mods = "ALT", action = act.CopyMode "MoveBackwardWord" },
          { key = "b", mods = "CTRL", action = act.CopyMode "PageUp" },
          { key = "c", mods = "CTRL", action = act.CopyMode "Close" },
          { key = "d", mods = "CTRL", action = act.CopyMode{ MoveByPage = (0.5) } },
          { key = "e", mods = "NONE", action = act.CopyMode "MoveForwardWordEnd" },
          { key = "f", mods = "NONE", action = act.CopyMode{ JumpForward = { prev_char = false } } },
          { key = "f", mods = "ALT", action = act.CopyMode "MoveForwardWord" },
          { key = "f", mods = "CTRL", action = act.CopyMode "PageDown" },
          { key = "g", mods = "NONE", action = act.CopyMode "MoveToScrollbackTop" },
          { key = "g", mods = "CTRL", action = act.CopyMode "Close" },
          { key = "h", mods = "NONE", action = act.CopyMode "MoveLeft" },
          { key = "j", mods = "NONE", action = act.CopyMode "MoveDown" },
          { key = "k", mods = "NONE", action = act.CopyMode "MoveUp" },
          { key = "l", mods = "NONE", action = act.CopyMode "MoveRight" },
          { key = "m", mods = "ALT", action = act.CopyMode "MoveToStartOfLineContent" },
          { key = "o", mods = "NONE", action = act.CopyMode "MoveToSelectionOtherEnd" },
          { key = "q", mods = "NONE", action = act.CopyMode "Close" },
          { key = "t", mods = "NONE", action = act.CopyMode{ JumpForward = { prev_char = true } } },
          { key = "u", mods = "CTRL", action = act.CopyMode{ MoveByPage = (-0.5) } },
          { key = "v", mods = "NONE", action = act.CopyMode{ SetSelectionMode =  "Cell" } },
          { key = "v", mods = "CTRL", action = act.CopyMode{ SetSelectionMode =  "Block" } },
          { key = "w", mods = "NONE", action = act.CopyMode "MoveForwardWord" },
          { key = "y", mods = "NONE", action = act.Multiple{ { CopyTo = "ClipboardAndPrimarySelection" }, { CopyMode = "Close" } } },
          { key = "PageUp", mods = "NONE", action = act.CopyMode "PageUp" },
          { key = "PageDown", mods = "NONE", action = act.CopyMode "PageDown" },
          { key = "End", mods = "NONE", action = act.CopyMode "MoveToEndOfLineContent" },
          { key = "Home", mods = "NONE", action = act.CopyMode "MoveToStartOfLine" },
          { key = "LeftArrow", mods = "NONE", action = act.CopyMode "MoveLeft" },
          { key = "LeftArrow", mods = "ALT", action = act.CopyMode "MoveBackwardWord" },
          { key = "RightArrow", mods = "NONE", action = act.CopyMode "MoveRight" },
          { key = "RightArrow", mods = "ALT", action = act.CopyMode "MoveForwardWord" },
          { key = "UpArrow", mods = "NONE", action = act.CopyMode "MoveUp" },
          { key = "DownArrow", mods = "NONE", action = act.CopyMode "MoveDown" },
        },

        search_mode = {
          { key = "Enter", mods = "NONE", action = act.CopyMode "PriorMatch" },
          { key = "Escape", mods = "NONE", action = act.CopyMode "Close" },
          { key = "n", mods = "CTRL", action = act.CopyMode "NextMatch" },
          { key = "p", mods = "CTRL", action = act.CopyMode "PriorMatch" },
          { key = "r", mods = "CTRL", action = act.CopyMode "CycleMatchType" },
          { key = "u", mods = "CTRL", action = act.CopyMode "ClearPattern" },
          { key = "PageUp", mods = "NONE", action = act.CopyMode "PriorMatchPage" },
          { key = "PageDown", mods = "NONE", action = act.CopyMode "NextMatchPage" },
          { key = "UpArrow", mods = "NONE", action = act.CopyMode "PriorMatch" },
          { key = "DownArrow", mods = "NONE", action = act.CopyMode "NextMatch" },
        },
      }

      function decl_shift_letter_key(x)
        table.insert(config.keys, {
          key = x.key:lower(),
          mods = x.mods .. "|SHIFT",
          action = x.action,
        })
        table.insert(config.keys, {
          key = x.key:upper(),
          mods = x.mods,
          action = x.action,
        })
        table.insert(config.keys, {
          key = x.key:upper(),
          mods = x.mods .. "|SHIFT",
          action = x.action,
        })
      end

      decl_shift_letter_key({ key = "C", mods = "CTRL", action = act.CopyTo "Clipboard" })
      decl_shift_letter_key({ key = "P", mods = "CTRL", action = act.ActivateCommandPalette })
      decl_shift_letter_key({ key = "R", mods = "CTRL", action = act.ReloadConfiguration })
      decl_shift_letter_key({ key = "T", mods = "CTRL", action = act.SpawnTab "CurrentPaneDomain" })
      decl_shift_letter_key({ key = "V", mods = "CTRL", action = act.PasteFrom "Clipboard" })
      decl_shift_letter_key({ key = "W", mods = "CTRL", action = act.CloseCurrentTab{ confirm = true } })
      decl_shift_letter_key({ key = "Y", mods = "CTRL", action = act.ActivateCopyMode })

      for i = 1, 9 do
        -- ALT + number to activate that window
        table.insert(config.keys, {
          key = tostring(i),
          mods = "ALT",
          action = act.ActivateTab(i - 1),
        })
      end

      config.mouse_bindings = {
        -- Change the default click behavior so that it only selects
        -- text and doesn"t open hyperlinks
        {
          event = { Up = { streak = 1, button = "Left" } },
          mods = "NONE",
          action = wezterm.action{ ExtendSelectionToMouseCursor = "Cell" },
        },

        {
          event = { Up = { streak = 2, button = "Left" } },
          mods = "NONE",
          action = "Nop",
        },

        {
          event = { Up = { streak = 3, button = "Left" } },
          mods = "NONE",
          action = "Nop",
        },

        -- and make CTRL-Click open hyperlinks
        {
          event = { Up = { streak = 1, button = "Left" } },
          mods = "CTRL",
          action = act.OpenLinkAtMouseCursor,
        },
        -- NOTE that binding only the "Up" event can give unexpected behaviors.
        -- Read more below on the gotcha of binding an "Up" event only.
      }

      config.set_environment_variables = {
        TERM = "wezterm",
      }

      config.hide_mouse_cursor_when_typing = false

      -- config.front_end = "WebGpu"

      return config
    '';
  };
}
