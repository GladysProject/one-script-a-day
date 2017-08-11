// Useful to know if it's the day in house 1 
// (Your house must have latitude and longitude specified)
gladys.sun.isItDay({house: 1})
    .then((isDay) => {
        if(isDay) {
            console.log(`Yes, it's the day in house 1 !`);
        } else {
            console.log(`It's the night...`);
        }
    });