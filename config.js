'use strict';

var path = require('path');

exports.port = process.env.PORT || 3000;
exports.static_root = process.env.STATIC_ROOT || '/';
exports.dev = (process.env.NODE_ENV !== 'production');
exports.mongodb = {
  uri: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost:27017/local'
};
exports.render = {
  root: path.join(__dirname, 'views'),
  autoescape: true,
  cache: 'memory', // disable, set to false
  ext: 'html',
  varControls: ['<%=', '%>'],
};
exports.cache = {
  path: path.join(__dirname, 'public'),
  option: {
    maxage: 100 * 24 * 60 * 60
  }
};
exports.body = {
    jsonLimit: '50mb',
    multipart: true,
    //formidable: { uploadDir: path.join(__dirname, 'public') }
};
exports.companyName = 'Koa Boilerplate';
exports.projectName = 'Koa Boilerplate';
exports.systemEmail = 'rightson@gmail.com';
exports.loginAttempts = {
  forIp: 50,
  forIpAndUser: 7,
  logExpiration: '20m'
};
exports.requireAccountVerification = false;
exports.smtp = {
  from: {
    name: process.env.SMTP_FROM_NAME || exports.projectName + ' Website',
    address: process.env.SMTP_FROM_ADDRESS || 'rightson@gmail.com'
  },
  credentials: {
    user: process.env.SMTP_USERNAME || 'rightson@gmail.com',
    password: process.env.SMTP_PASSWORD || 'password!',
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    ssl: true
  }
};
exports.oauth = {
  twitter: {
    key: process.env.TWITTER_OAUTH_KEY || '',
    secret: process.env.TWITTER_OAUTH_SECRET || ''
  },
  facebook: {
    key: process.env.FACEBOOK_OAUTH_KEY || '',
    secret: process.env.FACEBOOK_OAUTH_SECRET || ''
  },
  github: {
    key: process.env.GITHUB_OAUTH_KEY || '',
    secret: process.env.GITHUB_OAUTH_SECRET || ''
  },
  google: {
    key: process.env.GOOGLE_OAUTH_KEY || '',
    secret: process.env.GOOGLE_OAUTH_SECRET || ''
  },
  tumblr: {
    key: process.env.TUMBLR_OAUTH_KEY || '',
    secret: process.env.TUMBLR_OAUTH_SECRET || ''
  }
};
