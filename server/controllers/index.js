'use strict';

import html from './html'
import user_api from './api/user'

const router = require('koa-router')()

router.get('/', html.index)

router.get('/api/v1/users', user_api.list)
router.post('/api/v1/users', user_api.create)
router.get('/api/v1/users/:id', user_api.read)
router.put('/api/v1/users/:id', user_api.update)
router.del('/api/v1/users/:id', user_api.remove)

router.get('/404', html.not_found)
router.get('/500', html.internal_server_error)

router.get('/(.*)', html.not_found)

export default router
