var winston = require('winston');
var path = require('path');
var fs = require('fs');



winston.emitErrs = true;
var rootpath = path.resolve(path.join(__dirname, '../log'));
if (!fs.existsSync(rootpath)) fs.mkdirSync(rootpath);
var logger = new winston.Logger({
    transports: [
        new winston.transports.File({
            name: 'file#info',
            level: 'info',
            filename: path.join(rootpath, 'logger.info.log'),
            handleExceptions: false,
            json: true,
            maxsize: 5242880, //5MB
            maxFiles: 20,
            colorize: false
        }),
        new winston.transports.Console({
            level: process.env.LOGGER || 'verbose',
            handleExceptions: false,
            json: false,
            colorize: true,
            prettyPrint: true,
        })
    ],
    exitOnError: false
});

module.exports = logger;
module.exports.stream = {
    write: function(message, encoding){
        logger.info(message);
    }
};
