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

const server = http.createServer((req, res) => {
    console.log(req.url, req.method)

    const extension = path.extname(req.url);

    let contentType;

    switch (extension) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.jpg':
            contentType = 'img.jpeg';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.txt':
            contentType = 'text/plain';
            break;
        default:
            contentType = 'text/html';
            break;
    }

    let filepath =
        contentType === 'text/html' && req.url === '/'
            ? path.join(__dirname, 'views', 'index.html')
            : contentType === 'text/html' && req.url.slice(-1) === '/'   //slice(-1)represents the last charcter of te url (-ve = reverse order) 
                ? path.join(__dirname, 'views', req.url, 'index.html')
                : contentType === 'text/html'
                    ? path.join(__dirname, 'views', req.url)
                    : path.join(__dirname, req.url)

    //makes the .html extension not required in the browser
    if (!extenson && req.url.slice(-1) !== '/') filepath += '.html'

    const fileexists = fs.existsSync(filepath);

    if (fileexists){
        //serve the file
    }else{
        //404
        //301 redirect
        console.log(path.parse(filepath))
    }
})

server.listen(PORT, () => console.log('server is running on port', PORT))