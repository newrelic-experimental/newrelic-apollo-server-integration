// require("./src/open-telemetry");

const { ApolloServer } = require("apollo-server");
const { buildSubgraphSchema } = require("@apollo/federation");

const { resolvers } = require("./resolvers");
const { typeDefs } = require("./schema");

const port = 4002;

const {
  ApolloServerPluginLandingPageLocalDefault,
} = require("apollo-server-core");

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers }),
});

// The `listen` method launches a web server.
server.listen({ port }).then(({ url }) => {
  console.log(`🚀  Authors service ready at ${url}`);
});
