{ lib, config, pkgs, ... }:

let
  inherit (lib) types mkOption;
  cfg = config.ewwConfig;

  writeShellScriptDir = path: text:
    pkgs.writeTextFile {
      name = builtins.baseNameOf path;
      destination = "/${path}";
      executable = true;
      text = ''
        #!${pkgs.runtimeShell}
        ${text}
      '';
      checkPhase = ''
        ${pkgs.stdenv.shellDryRun} "$target"
      '';
    };
in
{
  options.ewwConfig = {
    yuck = mkOption {
      type = types.str;
      default = "";
      description = "eww yuck";
    };
    scss = mkOption {
      type = types.str;
      default = "";
      description = "eww scss";
    };
    modules = mkOption {
      type = types.attrsOf types.str;
      default = { };
      description = "eww modules";
    };
    scripts = mkOption {
      type = types.attrsOf types.str;
      default = { };
      description = "eww scripts";
    };
  };

  config = {
    programs.eww.configDir = pkgs.symlinkJoin {
      name = "eww-config";
      paths =
        [ (pkgs.writeTextDir "/eww.yuck" cfg.yuck) (pkgs.writeTextDir "/eww.scss" cfg.scss) ] ++
        (lib.attrsets.mapAttrsToList
          (name: text: (pkgs.writeTextDir "modules/${name}" text))
          cfg.modules) ++
        (lib.attrsets.mapAttrsToList
          (name: text: (writeShellScriptDir "scripts/${name}" text))
          cfg.scripts);
    };
  };
}
