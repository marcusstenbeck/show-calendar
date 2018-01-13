module.exports = function addShow(eventStore, { title, time, host, location }) {
  if (!title) {
    throw new Error('Show must have a title.');
  }

  if (!time) {
    throw new Error('Show must have a time.');
  }

  if (!host) {
    throw new Error('Show must have a host.');
  }

  if (!location) {
    throw new Error('Show must have a location.');
  }

  eventStore.commit({
    type: 'ShowAdded',
    payload: {
      title,
      time,
      host,
      location
    }
  });
};
