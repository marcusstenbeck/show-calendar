module.exports = function getShows(eventStore) {
  return eventStore.getEvents().reduce((shows, event) => {
    switch (event.type) {
      case 'ShowAdded':
        return [...shows, event.payload];

      default:
        return shows;
    }
  }, []);
};
