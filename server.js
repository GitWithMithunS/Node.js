//node runs on a server -not in the web browser (backend not frontend)
console.log('hello node')
// console.log(global)        // global is keyword for global object (node js has global object instead of windows object(webbrowser))

const os = require('os')   // 'os' is a module in node.js that provides info. about the operating system , such as platform , architecture and cpu information.
// console.log(os)
console.log('os type -->', os.type())
console.log('os version --> ',os.version())
console.log('os directory --> ',os.homedir())
console.log(__dirname,' => from os /dirname')
console.log(__filename,' => form os /filename')

const path = require('path')  //'path' is another module of nodejs that provides utilities for working with file and directory paths.
// console.log(path)    
console.log(path.dirname(__dirname))
console.log(path.dirname(__filename))
console.log(path.basename(__dirname))
console.log(path.basename(__filename))
console.log(path.extname(__filename) , ' => extension of filename (using path module)')
console.log(path.parse(__dirname))
console.log(path.parse(__filename))

//their are some more modules in node like=> "path","http","events","fs","crypto","os","url"

const math = require('./math.js') //require('./math') even this is correct
console.log(math.add(2,4))
console.log(math.mul(2,4))
const {add,sub,mul,div} = require('./math')  //another way of doing it is by destructuring
console.log(add(2,4))
console.log(div(2,4))