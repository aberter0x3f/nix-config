{
  pkgs,
  config,
  ...
}:
{
  home.packages = with pkgs; [
    (wmenu.overrideAttrs (
      finalAttrs: previousAttrs: {
        nativeBuildInputs = previousAttrs.nativeBuildInputs ++ [ makeWrapper ];
        postInstall =
          with config.lib.stylix.colors;
          let
            background = base00;
            foreground = base05;
            selection = base07;
            extraFlags = [
              "-f"
              "${config.stylix.fonts.monospace.name} ${builtins.toString config.stylix.fonts.sizes.applications}"
              "-N"
              background
              "-n"
              foreground
              "-S"
              selection
              "-s"
              background
            ];
          in
          (previousAttrs.postInstall or "")
          + ''
            wrapProgram $out/bin/wmenu --add-flags "${lib.escapeShellArgs extraFlags}"
            wrapProgram $out/bin/wmenu-run --add-flags "${lib.escapeShellArgs extraFlags}"
          '';
      }
    ))
  ];
}
