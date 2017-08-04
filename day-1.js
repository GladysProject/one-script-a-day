// Get the last location of the user
// Location can be tracked with OwnTracks (iOS/Android) or Tasker (Android)
gladys.location.getUser({ id: 1})
    .then((location) => {
        console.log(`User 1 has been last seen at ${location.latitude}, ${location.longitude}`);
    });