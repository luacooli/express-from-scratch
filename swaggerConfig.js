const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')

let options = {
  definition: {
    openapi: '3.0.0', // swagger version to be using
    info: {
      title: 'Express with swagger',
      version: '1.0.0', // project version
      description: 'API documantation',
    },
    basePath: '/users',
    components: {
      schemas: require('./schemas.json'),
    },
    paths: {
      '/users': {
        get: {
          description: 'route to get all users',
          tags: ['User'],
          responses: {
            200: {
              description: 'OK',
            },
          },
        },
      },
      '/users/:userId': {
        get: {
          description: 'route to get user by id',
          tags: ['User'],
          parameters: {
            in: 'query',
            name: 'userId',
            type: 'integer',
            required: true,
          },
          responses: {
            200: {
              description: 'OK',
            },
          },
        },
      },
      '/users/findByName': {
        get: {
          tags: ['User'],
          description: 'route to get users by name',
          parameters: [
            {
              in: 'query',
              name: 'name',
              type: 'string',
              required: true,
            },
          ],
          responses: {
            200: {
              description: 'OK',
            },
          },
        },
      },
      '/users': {
        post: {
          tags: ['User'],
          description: 'route to create a user',
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    id: {
                      type: 'integer',
                    },
                    name: {
                      type: 'string',
                    },
                    email: {
                      type: 'string',
                    },
                    commits: {
                      type: 'integer',
                    },
                    birthdate: {
                      type: 'string',
                    },
                    status: {
                      type: 'boolean',
                    },
                  },
                },
              },
            },
          },
          responses: {
            400: {
              description: 'Bad request',
            },
            201: {
              description: 'User created',
            },
          },
        },
      },
    },
  },
  apis: ['./index.js'],
}

let spec = swaggerJsDoc(options)

module.exports = { spec, swaggerUI }
