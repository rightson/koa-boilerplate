PORT = 3000
PORT_STAGING = 8000
PORT_PRODUCTION = 9000
LOG = koa-boilerplate.log
APP_NAME = koa-boilerplate
ARGS_FOREVER = --minUptime 10 --spinSleepTime 1000

dev:
	NODE_ENV=development PORT=$(PORT) nodemon index.js

staging:
	NODE_ENV=production PORT=$(PORT_STAGING) nodemon index.js

production:
	NODE_ENV=production PORT=$(PORT_PRODUCTION) LOG=$(LOG) pm2 --name $(APP_NAME) start index.js

install:
	yarn global add nodemon pm2
	yarn

test:
	./node_modules/.bin/mocha $(ARGS)

.PHONY: dev staging production install test

