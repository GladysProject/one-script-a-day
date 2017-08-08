// Display DeviceType with it last state
// Useful if you want to know value of a sensor
// Or just to know if TV is still On ;)
gladys.deviceType.getById({id: 1})
    .then((deviceType) => {
        console.log(`Last deviceType value is ${deviceType.lastValue} !`); 
    });