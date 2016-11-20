'use strict';

import path from 'path'
import mongoose from 'mongoose'

import logger from './lib/logger'
import * as config from './config'

import './models'

mongoose.connection.on('error', function(error) {
    logger.error('Failed to connect to ' + config.db.uri)
    logger.error(error)
    process.exit(0)
})

mongoose.connection.once('open', function() {
    logger.info('Connecting to ' + config.db.uri);
    mongoose.Promise = global.Promise;
})

mongoose.connection.on('close', function() {
    logger.info('Disconnect from ' + config.db.uri)
})

process.on('SIGINT', function () {
    logger.info('SIGINT intercepted!')
    mongoose.connection.close(function() {
        process.exit(0)
    })
})

mongoose.connect(config.db.uri, config.db.options)
