// Save that user just got back at home 
// in house ID 1
// Full event list here => https://github.com/GladysProject/gladys-data/blob/master/events/en.json
var params = {
    code: 'back-at-home',
    house: 1,
    user: 1
};

gladys.event.create(params)
    .then(() => {
        console.log(`Event was created with success !`);
    });