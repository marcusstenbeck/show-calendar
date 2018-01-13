const { makeExecutableSchema } = require('graphql-tools');
const gql = require('graphql-tag');
const resolvers = require('./resolvers');

const typeDefs = gql`
  scalar DateTime

  type Show {
    title: String!
    time: DateTime!
    host: String!
    location: String!
  }

  type Query {
    allShows: [Show!]!
  }

  type Mutation {
    addShow(
      title: String!
      time: DateTime!
      host: String!
      location: String!
    ): Boolean
  }
`;

module.exports = makeExecutableSchema({ typeDefs, resolvers });
