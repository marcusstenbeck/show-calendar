const { GraphQLDateTime } = require('graphql-iso-date');

module.exports = {
  DateTime: GraphQLDateTime,
  Query: {
    allShows: () => []
  },
  Mutation: {
    addShow: (_, data) => {
      throw new Error('Not implemented.');
      return true;
    }
  }
};
