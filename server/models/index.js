'use strict';

import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const ErrorLog = new Schema({
    message: String,
    date: { type: Date, default: Date.now },
})

mongoose.model('ErrorLog', ErrorLog)

const User = new Schema({
    name: String,
    email: String,
    creationDate: { type: Date, default: Date.now },
})

mongoose.model('User', User)
