// Get weather at a specific location
// (Need Forecast module)
var options = {
    latitude: 34.031266, 
    longitude: -118.682286
};

gladys.weather.get(options)
    .then((result) => {
        console.log(result);
        console.log(result.temperature);
        console.log(result.weather);
        console.log(result.humidity);
    })
    .catch(console.log);