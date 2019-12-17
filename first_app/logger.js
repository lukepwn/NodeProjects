const EventEmitter = require('events');
//const emitter = new EventEmitter();

class Logger extends EventEmitter{
	log (message) {
		console.log(message);
		
		// raise an event
		this.emit('messageLogged', {id: 1, url: 'http://' });
	}
}
	
/* function log (message) {
	console.log(message);
	
	
	// raise an event
	emitter.emit('messageLogged', {id: 1, url: 'http://' });
} */

//module.exports.log = log;
//module.exports = log;
module.exports = Logger;

