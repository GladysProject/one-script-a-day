// Wants the position of the ISS right now ?
// There is an API for that !
gladys.utils.request('http://api.open-notify.org/iss-now.json')
    .then((result) => {
       console.log(`Right now, the ISS is (${result.iss_position.latitude}, ${result.iss_position.longitude})`);
    });