// Send a message to user 1 from Gladys (null)
var message = `Hey, human, it's Gladys !`;
gladys.message.send({id: null}, {text: message, receiver: 1});