
NPM_CMD ?= npm
ZIP_CMD ?= tar
ZIP_OPTIONS ?= -zxvf

PACKAGE = `pwd`
SRC = $(PACKAGE)/src
DIST = $(PACKAGE)/dist

default: test coverage clean compile

build: lint test clean compile

run: lint test start

dependencies:
	$(NPM_CMD) install

lint:
	$(NPM_CMD) run lint

test:
	$(NPM_CMD) test

coverage:
	echo "TODO: Write coverage make command"

clean:
	rm -r $(DIST)

compile:
	$(NPM_CMD) run build
	$(NPM_CMD) run compile -- \
	 --no-prune \
	 --ignore=README.md \
	 --ignore=webpack.config.js \
	 --ignore=Makefile \
	 --ignore=yarn.lock \
	 --ignore=.gitignore \
	 --ignore=src/



start:
	$(NPM_CMD) start
