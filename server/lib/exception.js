'use strict';

import mongoose from 'mongoose'

import logger from './logger'

export default async function catchException(ctx, next) {
    try {
        await next()
    } catch(error) {
        logger.error(error)
        mongoose.model('ErrorLog').create({
            Message: error
        })
        await ctx.render('500')
    }
}
