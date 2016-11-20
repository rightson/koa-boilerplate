'use strict';

import fs from 'fs'

export async function not_found(ctx) {
    ctx.status = 404;
    await ctx.render('404')
}

export async function internal_server_error(ctx) {
    ctx.status = 500;
    await ctx.render('500')
}

export async function index(ctx) {
	await ctx.render('index')
}
