// Create an alarm that will ring  
// at 15:02 every monday for user 1
var options = {
    name: 'My great alarm',
    dayofweek: 1,
    time: '15:02',
    user: 1
};

gladys.alarm.create(options)
    .then(() => {
        console.log(`Alarm created with success !`);
    });