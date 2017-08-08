// Just to check if user of ID 1 is in house 1 ! :)
var options = {
    house: 1,
    user: 1
};

gladys.house.isUserAtHome(options)
    .then((userAtHome) => {
        if(userAtHome) {
            console.log(`User is at home !`);
        } else {
            console.log(`User is not at home !`);
        }
    });