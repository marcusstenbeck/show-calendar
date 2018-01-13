const { makeExecutableSchema } = require('graphql-tools');
const { GraphQLDateTime } = require('graphql-iso-date');
const gql = require('graphql-tag');
const { createStore } = require('../event-store');
const addShow = require('../commands/addShow');
const getShows = require('../queries/getShow');

const eventStore = createStore();

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

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers: {
    DateTime: GraphQLDateTime,
    Query: {
      allShows: () => {
        return getShows(eventStore);
      }
    },
    Mutation: {
      addShow: (_, data) => {
        addShow(eventStore, data);
        return true;
      }
    }
  }
});
