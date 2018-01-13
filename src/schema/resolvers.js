const { GraphQLDateTime } = require('graphql-iso-date');

module.exports = {
  DateTime: GraphQLDateTime,
  Query: {
    allEvents: () => []
  },
  Mutation: {
    addEvent: (_, data) => {
      throw new Error('Not implemented.');
      return true;
    }
  }
};
