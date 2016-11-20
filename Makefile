PORT = 3000
LOG = koa-boilerplate.log
LOG_PRODUCTION = production.log
FOREVER_ARGS = --minUptime 10 --spinSleepTime 1000

dev:
	NODE_ENV=development PORT=$(PORT) LOG=$(LOG) nodemon index.js

staging:
	NODE_ENV=production PORT=$(PORT) LOG=$(LOG) nodemon index.js

production:
	NODE_ENV=production PORT=4000 LOG=$(LOG_PRODUCTION) forever $(FOREVER_ARGS) start $(PWD)/index.js
	@forever list

.PHONY: dev staging production
