.PHONY: all clean

all: build/KuliaMonoNerdFont-BlackItalic.ttf build/KuliaMonoNerdFont-Black.ttf build/KuliaMonoNerdFont-BoldItalic.ttf build/KuliaMonoNerdFont-BoldLatin.ttf build/KuliaMonoNerdFont-Bold.ttf build/KuliaMonoNerdFont-ExtraBoldItalic.ttf build/KuliaMonoNerdFont-ExtraBold.ttf build/KuliaMonoNerdFont-LightItalic.ttf build/KuliaMonoNerdFont-Light.ttf build/KuliaMonoNerdFont-MediumItalic.ttf build/KuliaMonoNerdFont-Medium.ttf build/KuliaMonoNerdFont-RegularItalic.ttf build/KuliaMonoNerdFont-RegularLatin.ttf build/KuliaMonoNerdFont-Regular.ttf build/KuliaMonoNerdFont-SemiBoldItalic.ttf build/KuliaMonoNerdFont-SemiBold.ttf

JuliaMono-%.freezed.ttf: JuliaMono-%.ttf
	pyftfeatfreeze -f 'zero,ss01,ss08,ss13' $< $@
	python3 ./fontname.py 'Julia' 'Kulia' $@

build/KuliaMonoNerdFont-%.ttf: JuliaMono-%.freezed.ttf
	nerd-font-patcher $< -c -l -out build

clean:
	rm -rf build/KuliaMonoNerdFont-*.ttf
	rm -rf JuliaMono-*.freezed.ttf
