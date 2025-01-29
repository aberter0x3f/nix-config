{ pkgs, lib, ... }:

let
  files = builtins.readDir ./.;
  scripts = builtins.attrNames (lib.filterAttrs (_: type: type == "regular") files);
  shFiles = builtins.filter (name: lib.hasSuffix ".sh" name) scripts;
  createPackage =
    filename:
    let
      name = lib.removeSuffix ".sh" filename;
    in
    {
      inherit name;
      value =
        (pkgs.writeScriptBin name (builtins.readFile (./. + ("/" + filename)))).overrideAttrs
          (old: {
            buildCommand = "${old.buildCommand}\n patchShebangs $out";
          });
    };

  shPackages = lib.listToAttrs (builtins.map (filename: createPackage filename) shFiles);
in
shPackages
