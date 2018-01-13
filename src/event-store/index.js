module.exports = {
  createStore() {
    let events = [];

    return {
      getEvents() {
        return events;
      },
      commit(event) {
        events = [...events, event];
      }
    };
  }
};
