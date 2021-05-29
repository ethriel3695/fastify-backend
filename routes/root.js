async function routes(fastify, options, next) {
  fastify.get('/', async (request, reply) => {
    return { hello: 'world' };
  });
}

module.exports = routes;
