// Print the next event of the user 1
// (Calendar can be sync with Google Calendar for example)
gladys.calendar.getNextEventUser({id: 1})
    .then((event) => {
        console.log(`Your next event is "${event.name}", and start at ${event.start}.`);
    });