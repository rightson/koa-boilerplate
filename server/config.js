'use strict';

import path from 'path'
import zlib from 'zlib'
import winston from 'winston'

export const mode = process.env.NODE_ENV

export const port = process.env.PORT || 3000

export const rootDir = path.resolve(path.join(__dirname), '..')

export const pkg = require(path.join(rootDir, 'package.json'))

export const location = {
    public: path.join(rootDir, 'public'),
    upload: path.join(rootDir, 'upload')
}

export const db = {
    uri: mode === 'production'?
        `mongodb://localhost/${pkg.name}`:
        `mongodb://localhost/${pkg.name}-dev`,
    options: {
        db: { native_parser: true },
        server: { poolSize: 10 },
    }
}

let loggerConfig = {
    level: 'debug',
    transports: [
        new (winston.transports.Console)({
            timestamp: true,
            colorize: true
        })
    ]
}

if (mode === 'production' || process.env.LOG) {
    loggerConfig.transports.push(
        new (winston.transports.File)({
            filename: process.env.LOG || pkg.name + '.log',
            handleExceptions: true,
            timestamp: true,
            colorize: false,
            json: false
        })
    )
}

export const logger = new winston.Logger(loggerConfig)

export const compress = {
    flush: zlib.Z_SYNC_FLUSH
}

export const body = {
    multipart: true,
    formidable: {
        uploadDir: location.upload
    }
}

export const jsonPretty = {
    pretty: mode === 'production'? false: true,
    param: 'pretty'
}

export const views = {
    rootDir: path.join(rootDir, 'server', 'views'),
    engine: {
        map: {
            html: 'ejs'
        }
    }
}

export function banner(error) {
    if (error) throw error
    logger.info('Listening to port ' + port)
}

export default {
    mode,
    port,
    rootDir,
    pkg,
    location,
    db,
    logger,
    compress,
    body,
    jsonPretty,
    views,
    banner
}
