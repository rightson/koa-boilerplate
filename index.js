require('babel-register');
require('babel-polyfill');
try {
    require('./server');
} catch (error) {
    console.error(error)
}
