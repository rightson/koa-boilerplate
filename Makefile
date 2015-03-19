export PATH := $(PWD)/node_modules/.bin:$(PATH)

PORT := 3000
DEV_ENV := NODE_ENV=development PORT=$(PORT) STATIC_ROOT='/' LOGGER=debug

BOWER := bower_components
NODE_MODULES := node_modules

WATCHING := 'js|html|css'
IGNORED := $(NODE_MODULES),$(BOWER),.vagrant,.git
NODE_FLAGS := --harmony
MAIN := app.js

dev: setup_env
	$(DEV_ENV) \
    supervisor -q $(NODE_FLAGS) -e $(WATCHING) -i $(IGNORED) $(MAIN)

setup_env:
	@if [ ! -d $(NODE_MODULES) ]; then $(call execho,npm install); fi;

mongod:
	mongod --fork --dbpath ~/.mongodb --logpath ~/.mongodb/db.log --logappend

define execho
@echo "$1"; $1
endef

.PHONY: dev setup_env
