// Wants to get travel time between two points ?
// Need a direction module configurated in Gladys (Like google-direction)
var options = {
    origin: '10880 Malibu Point, 90265',
    destination: 'Golden Gate Bridge, San Francisco, CA, United State'
};

gladys.direction.travelTime(options)
    .then((result) => {
        console.log(`You need ${result.duration} seconds !`);
    });