const { makeExecutableSchema } = require('graphql-tools');
const gql = require('graphql-tag');
const resolvers = require('./resolvers');

const typeDefs = gql`
  scalar DateTime

  type Event {
    title: String!
    time: DateTime!
    host: String!
    location: String!
  }

  type Query {
    allEvents: [Event!]!
  }

  type Mutation {
    addEvent(
      title: String!
      time: DateTime!
      host: String!
      location: String!
    ): Boolean
  }
`;

module.exports = makeExecutableSchema({ typeDefs, resolvers });
