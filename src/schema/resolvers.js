const { GraphQLDateTime } = require('graphql-iso-date');
const { createStore } = require('../event-store');
const addShow = require('../commands/addShow');
const getShows = require('../queries/getShow');

const eventStore = createStore();

module.exports = {
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
};
