const fs = require('fs')

fs.readFile('./files/starter.txt', (err, data) => {
    if (err) throw err;
    console.log(data)     //the data is given out as a buffer data(u cant read and understand it as it is not encoded)
    console.log(data.toString())
})
//another way to read the file is 
fs.readFile('./files/starter.txt', 'utf8', (err, data) => {     //an extra parameter UTF-8 is used  -->'utf8' is an encoding option. 
    if (err) throw err;          //When reading or writing files, it's essential to specify the character encoding to interpret the binary data correctly.
    console.log(data)           //'utf8' is one of the most common character encodings, representing Unicode Transformation Format 8-bit.
})
//best way to read the files is :-
const path = require('path')
fs.readFile(path.join(__dirname, 'files', 'starter.txt'), "utf8", (err, data) => {
    if (err) throw err;
    console.log(data)
})


//exit on uncaught errors        
process.on('uncaughtException', err => {   //The 'on' method is used to register event listeners for specific events in Node.js. In this case, it's used to listen for the 'uncaughtException' event.
    console.log(`there was an uncaught error: ${err}`)     //process is a global object in Node.js that provides information about, and control over, the current Node.js process. It allows you to interact with various aspects of the runtime environment
    process.exit(1)  //The callback function provided to process.on takes an err parameter, which represents the uncaught exception that occurred.
})                  //The 'uncaughtException' event is emitted when an unhandled exception occurs in the Node.js process.

console.log('hello....')   //u can see that hello is console.loged first before the readfiles operation defining its asyncronous(non-blocking -> not waiting for any opertaion to completely finish but then execute next operations and come back their)

