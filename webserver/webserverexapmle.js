//start from here (in terminal type 'node server' to check this page out)
//this page is just for understand the http module and also switch statement
const http = require('http')
const path = require('path')
const fs = require('fs');
const fspromises = require('fs').promises;
const logevents = require('./logevent');
const EventEmitter = require('events');

class Emitter extends EventEmitter { };

const myemitter = new Emitter();

//define port
const PORT = process.env.port || 3500       //process.env.port this if the port is saved in a environment variable

//creating a web server
const server = http.createServer((req, res) => {
    console.log(req.url, req.method)
    let paths;

    if (req.url == '/' || req.url == 'index.html') {
        res.statusCode = 200; //means successful
        res.setHeader('Content-Type', 'text/html');   //content type is set to html/text
        paths = path.join(__dirname, 'views', 'index.html')
        fs.readFile(paths, 'utf8', (err, data) => {
            res.end(data)            //send the data
        })
    }

    //an other way to do it
    // switch (req.url) {
    //     case '/':
    //         res.statusCode = 200; //means successful
    //         res.setHeader('Content-Type', 'text/html');   //content type is set to html/text
    //         paths = path.join(__dirname, 'views', 'index.html')
    //         fs.readFile(paths, 'utf8', (err, data) => {
    //             res.end(data)            //send the data
    //         })
    //         break
    // }

})

//listening to the port
server.listen(PORT, () => console.log('server is running on port', PORT))