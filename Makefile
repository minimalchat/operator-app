
NPM_CMD ?= npm
ZIP_CMD ?= tar
ZIP_OPTIONS ?= -zcf

PACKAGE = `pwd`
SRC = $(PACKAGE)/src
ASSETS = $(PACKAGE)/assets
DIST = $(PACKAGE)/dist

.PHONY: coverage test

default: test coverage clean compile distribute

run: test lint build start

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

build:
	$(NPM_CMD) run build


compile-linux:
	@echo "\nLinux\n"

	$(NPM_CMD) run compile:linux -- \
	 --ignore=README.md \
	 --ignore=webpack.config.js \
	 --ignore=Makefile \
	 --ignore=yarn.lock \
	 --ignore=.gitignore \
	 --ignore=src \
	 --ignore=node_modules \
	 --win32metadata.CompanyName='Minimal Chat' \
	 --win32metadata.ProductName=Operator \
	 --appname=Operator \
	 --app-copyright=BSD-3

compile-win:
	@echo "\nWindows\n"
	$(NPM_CMD) run compile:win -- \
	--ignore=README.md \
	--ignore=webpack.config.js \
	--ignore=Makefile \
	--ignore=yarn.lock \
	--ignore=.gitignore \
	--ignore=src \
	--ignore=node_modules \
	--win32metadata.CompanyName='Minimal Chat' \
	--win32metadata.ProductName=Operator \
	--appname=Operator \
	--app-copyright=BSD-3

compile-osx:
	@echo "\nOSX\n"
	$(NPM_CMD) run compile:osx -- \
	--ignore=README.md \
	--ignore=webpack.config.js \
	--ignore=Makefile \
	--ignore=yarn.lock \
	--ignore=.gitignore \
	--ignore=src \
	--ignore=node_modules \
	--win32metadata.CompanyName='Minimal Chat' \
	--win32metadata.ProductName=Operator \
	--appname=Operator \
	--app-copyright=BSD-3
 
compile: build compile-linux compile-win compile-osx

distribute:
	@echo
	@cd $(DIST); ls -d * | xargs -I [] $(ZIP_CMD) $(ZIP_OPTIONS) [].tar.gz []

start:
	$(NPM_CMD) start
