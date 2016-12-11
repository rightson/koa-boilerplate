'use strict';

import Koa from 'koa'
import koaLogger from 'winston-koa-logger'
import convert from 'koa-convert'
import compress from 'koa-compress'
import staticFiles from 'koa-static'
import body from 'koa-body'
import json from 'koa-json'
import views from 'koa-views'

import config from './config'
import auth from './auth'
import db from './db'
import controllers from './controllers'
import catchException from './lib/exception'

const app = new Koa()

app.use(convert(koaLogger(config.logger)))

app.use(compress(config.compress))

app.use(body(config.body))

app.use(convert(auth.initialize()))

app.use(convert(staticFiles(config.location.public)))

app.use(convert(json(config.jsonPretty)));

app.use(views(config.views.rootDir), config.views.engine)

app.use(catchException)

app.use(controllers.routes())

app.use(controllers.allowedMethods())

app.listen(config.port, config.banner)

export default app
