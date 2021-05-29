# Reusable Backend Service for Strides

## Resources for configuration

**Fastify project setup**
- https://www.fastify.io/docs/latest/Getting-Started/

**Swagger docs setup**
- https://www.freecodecamp.org/news/how-to-build-blazing-fast-rest-apis-with-node-js-mongodb-fastify-and-swagger-114e062db0c9/

```js
// Swagger config file
exports.options = {
  routePrefix: '/documentation',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'Test swagger',
      description: 'Testing the Fastify swagger API',
      version: '0.1.0',
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here',
    },
    host: 'localhost',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    // tags: [
    //   { name: 'user', description: 'User related end-points' },
    //   { name: 'code', description: 'Code related end-points' },
    // ],
    // definitions: {
    //   User: {
    //     type: 'object',
    //     required: ['id', 'email'],
    //     properties: {
    //       id: { type: 'string', format: 'uuid' },
    //       firstName: { type: 'string' },
    //       lastName: { type: 'string' },
    //       email: { type: 'string', format: 'email' },
    //     },
    //   },
    // },
    securityDefinitions: {
      apiKey: {
        type: 'apiKey',
        name: 'apiKey',
        in: 'header',
      },
    },
  },
  uiConfig: {
    docExpansion: 'full',
    deepLinking: false,
  },
  staticCSP: true,
  transformStaticCSP: (header) => header,
};
```

```js
// index.js server file
const swagger = require('./config/swagger');
...
fastify.register(require('fastify-swagger'), swagger.options);
...
const start = async () => {
  try {
    await fastify.listen(3000);
    // new line for swagger
    fastify.swagger();
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
```