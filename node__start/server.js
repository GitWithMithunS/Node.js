//--> to run this file remember to check the fiel director in the terminal(cd ./node_modules as server.js which u r going to run is inside this file)

//node runs on a server -not in the web browser (backend not frontend)
console.log('hello node')
// console.log(global)        // global is keyword for global object (node js has global object instead of windows object(webbrowser))

const os = require('os')   // 'os' is a module in node.js that provides info. about the operating system , such as platform , architecture and cpu information.
// console.log(os)
console.log('os type -->', os.type())
console.log('os version --> ', os.version())
console.log('os directory --> ', os.homedir())
console.log(os.platform())
console.log('architercure used in this os --> ', os.arch())
console.log(__dirname, ' => from os /dirname')
console.log(__filename, ' => form os /filename')

const path = require('path')  //'path' is another module of nodejs that provides utilities for working with file and directory paths.
// console.log(path)    
console.log(path.dirname(__dirname))  //__dirname returns the absolute path of the directory containing the script. It represents the directory name of the current module
console.log(path.dirname(__filename)) //__filename returns the absolute path of the currently executing script. It represents the file name of the current module.
console.log(path.basename(__dirname))
console.log(path.basename(__filename))
console.log(path.extname(__filename), ' => extension of filename (using path module)')
console.log(path.parse(__dirname))
console.log(path.parse(__filename))
console.log(path.join(__dirname, 'files', 'examples.txt'), '=> using join ')

//their are some more modules in node like=> "path","http","events","fs","crypto","os","url"

const math = require('./math.js') //require('./math') even this is correct
console.log(math.add(2, 4))
console.log(math.mul(2, 4))
const { add, sub, mul, div } = require('./math.js')  //another way of doing it is by destructuring
console.log(add(2, 4))
console.log(div(2, 4))

const http = require('http');    //The http module is essential for creating HTTP servers and handling HTTP requests and responses
const server = http.createServer((req, res) => {    //The http module allows you to create an HTTP server using the createServer
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!,form node.js');  //setting response headers using writeHead and sending the response body using end
});
server.listen(3000, '127.0.0.1');    //Listening for Requests

const EventEmitter = require('events');  //The events module provides an EventEmitter class that allows the implementation of the observer pattern for handling events.
const myEmitter = new EventEmitter();    // creating an instance of event
myEmitter.on('customEvent', () => {      //The on method is used to register an event listener for the event named 'customEvent'.When the 'customEvent' is emitted, the provided callback function is executed.
  console.log('Custom event emitted!');
});
myEmitter.emit('customEvent');     //The emit method is used to trigger the event named 'customEvent'. 

// const url = require('url');       //The url module provides utilities for URL parsing and formatting
// const parsedUrl = url.parse('https://www.example.com/path?query=123');
// const crypto = require('crypto');   //The crypto module provides cryptographic functionality, including hash functions, HMAC, and various encryption algorithms.
// const hash = crypto.createHash('sha256').update('Hello, World!').digest('hex');
