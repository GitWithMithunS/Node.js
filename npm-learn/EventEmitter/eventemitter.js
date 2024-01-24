const logevents = require('./logevent');
const EventEmitter = require('events');

class Emitter extends EventEmitter { };

const myemitter = new Emitter();

myemitter.on('log' , (msg) => logevents(msg));

setTimeout(() => {
    //emit evet
    myemitter.emit('log','log event emitter!')
}, (2000));