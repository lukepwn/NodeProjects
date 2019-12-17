/* var getJSON = require('get-json')

getJSON('http://api.bitly.com/v3/shorten?callback=?',
    {
        format: "json",
        apiKey: YOUR_API_KEY,
        login: YOUR_LOGIN,
        longUrl: "http://link.to.be/shortened"
    },
    function(response) {
        console.log(response.data.url);
    }
); */

/* const path = require('path');
var pathObj= path.parse(__filename);
console.log(pathObj); */

const EventEmitter = require('events');
//const emitter = new EventEmitter();

const Logger = require('./logger');
const logger = new Logger();
//log('message');


// register a listener
logger.on('messageLogged', (arg) => {
	console.log('listener called', arg);
});

logger.log('message');