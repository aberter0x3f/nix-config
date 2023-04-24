PY3=python3

.PHONY: all clean

all: RedFishSans-ExtraLight.otf RedFishSans-ExtraLightItalic.otf RedFishSans-Light.otf RedFishSans-LightItalic.otf RedFishSans-Regular.otf RedFishSans-RegularItalic.otf RedFishSans-SemiBold.otf RedFishSans-SemiBoldItalic.otf RedFishSans-Bold.otf RedFishSans-BoldItalic.otf

RedFishSans-ExtraLight.otf: sarasa-extralight.ttc build.py
	$(PY3) build.py 'ExtraLight' 0 'sarasa-extralight.ttc(Sarasa UI SC Xlight)'

RedFishSans-ExtraLightItalic.otf: sarasa-extralightitalic.ttc build.py
	$(PY3) build.py 'ExtraLight' 1 'sarasa-extralightitalic.ttc(Sarasa UI SC Xlight Italic)'

RedFishSans-Light.otf: sarasa-light.ttc build.py
	$(PY3) build.py 'Light' 0 'sarasa-light.ttc(Sarasa UI SC Light)'

RedFishSans-LightItalic.otf: sarasa-lightitalic.ttc build.py
	$(PY3) build.py 'Light' 1 'sarasa-lightitalic.ttc(Sarasa UI SC Light Italic)'

RedFishSans-Regular.otf: sarasa-regular.ttc build.py
	$(PY3) build.py 'Regular' 0 'sarasa-regular.ttc(Sarasa UI SC)'

RedFishSans-RegularItalic.otf: sarasa-italic.ttc build.py
	$(PY3) build.py 'Regular' 1 'sarasa-italic.ttc(Sarasa UI SC Italic)'

RedFishSans-SemiBold.otf: sarasa-semibold.ttc build.py
	$(PY3) build.py 'SemiBold' 0 'sarasa-semibold.ttc(Sarasa UI SC Semibold)'

RedFishSans-SemiBoldItalic.otf: sarasa-semibolditalic.ttc build.py
	$(PY3) build.py 'SemiBold' 1 'sarasa-semibolditalic.ttc(Sarasa UI SC Semibold Italic)'

RedFishSans-Bold.otf: sarasa-bold.ttc build.py
	$(PY3) build.py 'Bold' 0 'sarasa-bold.ttc(Sarasa UI SC Bold)'

RedFishSans-BoldItalic.otf: sarasa-bolditalic.ttc build.py
	$(PY3) build.py 'Bold' 1 'sarasa-bolditalic.ttc(Sarasa UI SC Bold Italic)'

clean:
	rm -f RedFishSans-*.otf
