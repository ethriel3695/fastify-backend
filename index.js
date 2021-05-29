const rootRoute = require('./routes/root');
const swagger = require('./config/swagger');

const fastify = require('fastify')({
  logger: true,
});

fastify.register(rootRoute);
fastify.register(require('fastify-swagger'), swagger.options);

const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.swagger();
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
