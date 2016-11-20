'use strict';

import mongoose from 'mongoose'

const isValid = mongoose.Types.ObjectId.isValid;

export default function getValidId(ctx) {
    if (!isValid(ctx.params.id)) {
        ctx.throw(400, `Invalid ID "${ctx.params.id}"`)
    }
    return ctx.params.id
}
