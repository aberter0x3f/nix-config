{
  pkgs,
  stdenvNoCC,
  lib,
  makeWrapper,
  wasi-sysroot-judge,
  wasi-libclang_rt-judge,
}:

let
  llvmPackages = pkgs.llvmPackages;
in
stdenvNoCC.mkDerivation {
  pname = "wasm-judge-clang";
  version = llvmPackages.clang.version;

  nativeBuildInputs = [
    makeWrapper
  ];

  dontUnpack = true;
  dontConfigure = true;
  dontBuild = true;
  dontCheck = true;

  installPhase = ''
    runHook preInstall

    mkdir -p $out/bin
    mkdir -p $out/resource-dir

    ln -s ${llvmPackages.clang-unwrapped.lib}/lib/clang/${lib.versions.major llvmPackages.clang.version}/include $out/resource-dir/include
    ln -s ${wasi-libclang_rt-judge}/lib $out/resource-dir/lib

    local common_flags=(
      "--target=wasm32-wasi-wasip1"
      "--sysroot=${wasi-sysroot-judge}"
      "-resource-dir=$out/resource-dir"
    )

    makeWrapper ${llvmPackages.clang-unwrapped}/bin/clang $out/bin/wasm-judge-clang \
      --add-flags "''${common_flags[*]}" \
      --prefix PATH : ${lib.makeBinPath [ llvmPackages.lld ]}

    makeWrapper ${llvmPackages.clang-unwrapped}/bin/clang++ $out/bin/wasm-judge-clang++ \
      --add-flags "-fno-exceptions" \
      --add-flags "''${common_flags[*]}" \
      --prefix PATH : ${lib.makeBinPath [ llvmPackages.lld ]}

    runHook postInstall
  '';

  meta = {
    description = "Wrapper for clang / clang++ to compile for wasm judge";
    platforms = pkgs.lib.platforms.all;
  };
}
