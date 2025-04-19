{
  lib,
  fetchFromGitHub,
  fetchpatch,
  cmake,
  pkg-config,
  alsa-lib ? null,
  carla ? null,
  fftwFloat,
  fltk13,
  fluidsynth ? null,
  lame ? null,
  libgig ? null,
  libjack2 ? null,
  libpulseaudio ? null,
  libsamplerate,
  libsoundio ? null,
  libsndfile,
  libvorbis ? null,
  portaudio ? null,
  qtbase,
  qtx11extras,
  qttools,
  SDL2 ? null,
  mkDerivation,
}:

mkDerivation rec {
  pname = "lmms";
  version = "17215343e40e68854d6a5b150ed29248f8111b51";

  src = fetchFromGitHub {
    owner = "LMMS";
    repo = "lmms";
    rev = "${version}";
    hash = "sha256-MIzVa28ChNCGWCm79nd+4+LfOwKTIq+eMiO275psgtA=";
    fetchSubmodules = true;
  };

  nativeBuildInputs = [
    cmake
    qttools
    pkg-config
  ];

  buildInputs = [
    carla
    alsa-lib
    fftwFloat
    fltk13
    fluidsynth
    lame
    libgig
    libjack2
    libpulseaudio
    libsamplerate
    libsndfile
    libsoundio
    libvorbis
    portaudio
    qtbase
    qtx11extras
    SDL2 # TODO: switch to SDL2 in the next version
  ];

  cmakeFlags = [ "-DWANT_QT5=ON" ];

  meta = with lib; {
    description = "DAW similar to FL Studio (music production software)";
    mainProgram = "lmms";
    homepage = "https://lmms.io";
    license = licenses.gpl2Plus;
    platforms = [
      "x86_64-linux"
      "i686-linux"
    ];
    maintainers = [ ];
  };
}
