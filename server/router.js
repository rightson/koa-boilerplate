'use strict';

import controllers from './controllers'

const router = require('koa-router')()

router.get('/', controllers.html.index)

router.get('/api/v1/users', controllers.user_api.list)
router.post('/api/v1/users', controllers.user_api.create)
router.get('/api/v1/users/:id', controllers.user_api.read)
router.put('/api/v1/users/:id', controllers.user_api.update)
router.del('/api/v1/users/:id', controllers.user_api.remove)

router.get('/404', controllers.html.not_found)
router.get('/500', controllers.html.internal_server_error)

router.get('/(.*)', controllers.html.not_found)

export default router
