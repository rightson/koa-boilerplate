PORT = 3000
LOG = koa-boilerplate.log
LOG_PRODUCTION = production.log
ARGS_FOREVER = --minUptime 10 --spinSleepTime 1000

dev:
	NODE_ENV=development PORT=$(PORT) LOG=$(LOG) nodemon index.js

staging:
	NODE_ENV=production PORT=$(PORT) LOG=$(LOG) nodemon index.js

production:
	NODE_ENV=production PORT=4000 LOG=$(LOG_PRODUCTION) forever $(ARGS_FOREVER) start $(PWD)/index.js
	@forever list

install:
	yarn global add nodemon forever
	yarn

.PHONY: dev staging production install
