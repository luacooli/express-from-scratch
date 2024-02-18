const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')

let options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express with swagger',
      version: '1.0.0',
      description: 'API documantation',
    },
    components: {
      schemas: require('./schemas.json'),
    },
  },
  apis: ['./index.js'],
}

let spec = swaggerJsDoc(options)

module.exports = { spec, swaggerUI }
