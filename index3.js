//we can get rid off the callback hell by using async/await function o nodejs
const fsPromises = require('fs').promises;   //we are importing a filesystem promises(romise-based API of the Node.js fs module)
const path = require('path')   //The fs.promises object contains methods that return promises instead of using traditional callbacks
 
const fileops = async() => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname,'files','starter.txt'),'utf8')  //(err,data) => {if (err) throw err} this line may not be needed here as we are using try()catch() werein catch getting any error if present.
        console.log(data)
        // await fsPromises.unlink(path.join(__dirname,'files','starter.txt'))  //"unlink" is used to delete a file
        await fsPromises.writeFile(path.join(__dirname,'files','asynreply.txt'),data)
        await fsPromises.appendFile(path.join(__dirname,'files','asynreply.txt'),'\n\nNice to meet you')
        await fsPromises.rename(path.join(__dirname,'files','asynreply.txt'),path.join(__dirname,'files','promiseComplete.txt'))
        const newdata = await fsPromises.readFile(path.join(__dirname,'files','promiseComplete.txt'),'utf8')  //(err,data) => {if (err) throw err} this line may not be needed here as we are using try()catch() werein catch getting any error if present.
        console.log(newdata)
    } catch (error) {
        console.log(error)
    }
}

fileops()