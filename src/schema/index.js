const { makeExecutableSchema } = require('graphql-tools');
const gql = require('graphql-tag');

const typeDefs = gql`
  type Query {
    helloWorld: String
  }
`;

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers: {
    Query: {
      helloWorld: () => 'Hello World!'
    }
  }
});
