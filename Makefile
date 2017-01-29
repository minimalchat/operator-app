
NPM_CMD ?= npm
ZIP_CMD ?= tar
ZIP_OPTIONS ?= -zcf

PACKAGE = `pwd`
SRC = $(PACKAGE)/src
ASSETS = $(PACKAGE)/assets
DIST = $(PACKAGE)/dist

default: test coverage clean compile distribute

build: lint test clean compile

run: lint test start

dependencies:
	$(NPM_CMD) install

lint:
	$(NPM_CMD) run lint

test:
	$(NPM_CMD) test

coverage:
	@echo 'TODO: Write coverage make command'

clean:
	rm -r $(DIST) > /dev/null 2>&1

compile:
	$(NPM_CMD) run build

	@echo
	@# SUPER HACKY
	mkdir -p $(ASSETS)/css
	sed 's/\.\.\/resources/\.\./g' <node_modules/@blueprintjs/core/dist/blueprint.css >assets/css/blueprint.css
	sed 's/\.\.\/resources/\.\./g' <node_modules/@blueprintjs/core/dist/blueprint.css.map >assets/css/blueprint.css.map
	mkdir -p $(ASSETS)/icons
	cp -r node_modules/@blueprintjs/core/resources/icons/*.{eot,ttf,woff} $(ASSETS)/icons/

	$(NPM_CMD) run compile -- \
	 --ignore=README.md \
	 --ignore=webpack.config.js \
	 --ignore=Makefile \
	 --ignore=yarn.lock \
	 --ignore=.gitignore \
	 --ignore=src \
	 --ignore=node_modules

distribute:
	@echo
	@cd $(DIST); ls -d * | xargs -I [] $(ZIP_CMD) $(ZIP_OPTIONS) [].tar.gz []

start:
	$(NPM_CMD) start
