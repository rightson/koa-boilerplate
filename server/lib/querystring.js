'use strict';

import querystring from 'querystring'

export function getQueryString(ctx) {
    return querystring.parse(ctx.request.querystring)
}

export function getPagination(qs, skip=0, limit=100) {
    if (qs.skip !== '') {
        skip = parseInt(qs.skip)
        delete qs.skip
    }
    if (qs.limit !== '') {
        limit = parseInt(qs.limit)
        delete qs.limit
    }
    return { skip, limit }
}
