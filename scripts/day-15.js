// Wants to know if your house is empty or someone is at home ?
gladys.house.isEmpty({house: 1})
    .then((empty) => {
        if(empty) {
            console.log('Nobody is at home !');
        } else {
            console.log('Home is safe. Someone is at home.');
        }
    });