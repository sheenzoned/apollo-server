const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/type-defs");
const { resolvers } = require("./schema/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true, // see below for more about this
  cors: {
    origin: "*",
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
    credentials: true,
  },
});

server.listen().then(({ url }) => {
  console.log(`YOUR API IS RUNNING AT: ${url} :)`);
});
