'use strict';

import querystring from 'querystring'

export default {
    getQueryString,
    getPagination,
    getSortingOption,
    getDateRange
}

export function getQueryString(ctx) {
    let qs = querystring.parse(ctx.request.querystring)
    let obj = JSON.parse(JSON.stringify(qs))
    // pretty is the keyword reserved for koa-json
    if (obj.hasOwnProperty('pretty')) delete obj['pretty']
    return obj
}

export function getPagination(qs, skip=0, limit=100) {
    if (qs.hasOwnProperty('skip')) {
        skip = parseInt(qs.skip)
        delete qs.skip
    }
    if (qs.hasOwnProperty('limit')) {
        limit = parseInt(qs.limit)
        delete qs.limit
    }
    return { skip, limit }
}

export function getSortingOption(qs, key='Date', order=1) {
    if (qs.hasOwnProperty('sortby')) {
        key = qs.sortby
        delete qs.sortby
    }
    if (qs.hasOwnProperty('order')) {
        order = qs.order
        delete qs.order
    }
    let option = {}
    option[key] = order
    return option
}

export function getDateRange(qs) {
    if (qs.hasOwnProperty('Date_Start')) {
        if (!qs.Date) qs.Date = {}
        qs.Date["$gte"] = qs.Date_Start
        delete qs.Date_Start
    }
    if (qs.hasOwnProperty('Date_End')) {
        if (!qs.Date) qs.Date = {}
        qs.Date["$lt"] = qs.Date_End
        delete qs.Date_End
    }
    return qs;
}
