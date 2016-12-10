'use strict';

import mongoose from 'mongoose'

const isValid = mongoose.Types.ObjectId.isValid;

export default {
    getValidId,
    caseInsensitive,
    validateFieldValue
}

export function getValidId(ctx) {
    if (!isValid(ctx.params.id)) {
        ctx.throw(400, `Invalid ID "${ctx.params.id}"`)
    }
    return ctx.params.id
}

export function caseInsensitive(pattern) {
    return { "$regex": new RegExp("^" + pattern.toLowerCase(), "i") }
}

export async function validateFieldValue(ctx, modelName, option) {
    let result = await mongoose.model(modelName).find(option)
    if (!result.length) ctx.throw(400, `${modelName} has invalid value`)
}
