// Want a dad Joke ?
// Use this API => https://icanhazdadjoke.com/
var options = {
  url: 'https://icanhazdadjoke.com',
  headers: {
    'Accept': 'application/json'
  }
};

gladys.utils.request(options)
    .then((result) => {
        console.log(`I have a joke. ${result.joke}`);
    });