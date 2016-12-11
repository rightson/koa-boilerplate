'use strict';

import mongoose from 'mongoose'
import passport from 'koa-passport'
import passportLocal from 'passport-local'
import crypto from 'crypto'
import passportLocalApiKey from 'passport-localapikey'

import models from './models'

const LocalStrategy = passportLocal.Strategy
const LocalAPIKeyStrategy = passportLocalApiKey.Strategy
const User = mongoose.model('User')

passport.use(new LocalAPIKeyStrategy(function(apikey, done) {
    User.findOne({ apikey: apikey }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        return done(null, user);
    })
}))

passport.use(new LocalStrategy(function(username, password, done) {
    let salt = crypto.createHash('md5').update(password).digest('hex')
    User.findOne({ name: username, password: salt }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        return done(null, user);
    })
}))

passport.serializeUser(function(user, done) {
    done(null, user);
})

passport.deserializeUser(function(user, done) {
    done(null, user);
})

export default passport;
