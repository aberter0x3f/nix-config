{ lib, fetchFromGitHub, cmake, pkg-config, perl538, perl538Packages
, alsa-lib ? null, fftwFloat, fltk13
, fluidsynth ? null, lame ? null, libgig ? null, libjack2 ? null, libpulseaudio ? null
, libsamplerate, libsoundio ? null, libsndfile, libvorbis ? null, portaudio ? null
, qtbase, qtx11extras, qttools, SDL2 ? null, mkDerivation }:

mkDerivation rec {
  pname = "lmms-nightly";
  version = "43fbcca9cb341e7f759faf9070278fcc20b988f7";

  src = fetchFromGitHub {
    owner = "LMMS";
    repo = "lmms";
    rev = "${version}";
    sha256 = "sha256-f3mfvdwReSF0DyXrfLXNVwXgVYdoQ9gfa9zPY8ttUe8=";
    fetchSubmodules = true;
  };

  nativeBuildInputs = [ cmake qttools pkg-config perl538 ];

  buildInputs = [
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
    perl538
    perl538Packages.ListMoreUtils
    perl538Packages.XMLParser
    portaudio
    qtbase
    qtx11extras
    SDL2
  ];

  preConfigurePhases = "preConfigure";
  preConfigure = ''
    substituteInPlace plugins/LadspaEffect/swh/ladspa/*.pl \
      --replace '/usr/bin/perl -w' '${perl538}/bin/perl'
  '';

  cmakeFlags = [ "-DWANT_QT5=ON" ];

  meta = with lib; {
    description = "DAW similar to FL Studio (music production software)";
    homepage = "https://lmms.io";
    license = licenses.gpl2Plus;
    platforms = [ "x86_64-linux" "i686-linux" ];
    maintainers = with maintainers; [ goibhniu yana ];
  };
}
