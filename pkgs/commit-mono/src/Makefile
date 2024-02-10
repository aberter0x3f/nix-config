.PHONY: all clean

all: build/CommitMonoNerdFont-400-Regular.otf build/CommitMonoNerdFont-400-Italic.otf build/CommitMonoNerdFont-700-Regular.otf build/CommitMonoNerdFont-700-Italic.otf build/CommitMonoNerdFont-300-Regular.otf build/CommitMonoNerdFont-300-Italic.otf build/CommitMonoNerdFont-450-Regular.otf build/CommitMonoNerdFont-450-Italic.otf

build/CommitMonoNerdFont-%.otf: CommitMono-%.otf
	nerd-font-patcher $< -c -l -out build

clean:
	rm -rf build/CommitMonoNerdFont-*.otf
