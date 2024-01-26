const logevents = require('./logevent');   // Importing the logevents function from 'logevent' module
const EventEmitter = require('events');   // Importing the EventEmitter class from the 'events' module

class Emitter extends EventEmitter { };    // Creating a custom event emitter class by extending EventEmitter

const myemitter = new Emitter();        // Creating an instance of the custom event emitter

// Adding an event listener for the 'log' event
myemitter.on('log' , (msg) => logevents(msg)); // When the 'log' event is emitted, it triggers the callback function, which calls the logevents function with the provided message.
                                      
setTimeout(() => {                       // After a timeout, emitting the 'log' event with a message
    //emit evet
    myemitter.emit('log','log event emitter!')
}, (2000));    //When the 'log' event is emitted, the registered event listener calls the logevents function, passing the message 'log event emitter!'. This function logs the message to the console and appends it to the 'eventlog.txt' file.