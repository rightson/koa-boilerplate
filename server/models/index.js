'use strict';

import mongoose from 'mongoose'
import hat from 'hat'

const Schema = mongoose.Schema;

const ErrorLog = new Schema({
    message: String,
    date: { type: Date, default: Date.now },
})

mongoose.model('ErrorLog', ErrorLog)

const User = new Schema({
    name: String,
    email: String,
    password: String,
    apikey: { type: String, default: hat() },
    creationDate: { type: Date, default: Date.now },
})

mongoose.model('User', User)

export default mongoose
