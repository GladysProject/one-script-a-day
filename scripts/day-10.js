// Make an HTTP request to get Bitcoin price
gladys.utils.request('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then((result) => {
        
        var currentPrice = result.bpi.EUR.rate_float;
        var message = `BitCoin Current price is ${currentPrice} !`;
    });