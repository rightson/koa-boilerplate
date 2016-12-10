var restUnitTest = require('./lib/rest-unittest')

restUnitTest.listResources('/api/v1/users')
restUnitTest.createResources('/api/v1/users', '../data/api/user.json')
