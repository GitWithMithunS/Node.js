const {format} = require('date-fns')     //The date-fns library is used for date formatting (format function).
const {v4:uuid} = require('uuid')      //The uuid library is used for generating UUIDs (v4 function).

const fs = require('fs');             
const fspromises = require('fs').promises;
const path= require('path')

console.log('hi event emitter')      
const logevents = async (message) => {       // Logging function
    const datetime  = `${format(new Date() , 'yyyyMMdd /t HH:mm:ss')}` // Getting the current date and time in a formatted string
    const logitem = `${datetime} \t ${uuid()} \t ${message} \n`         // Generating a UUID
    console.log(logitem)
    try {
        if(!fs.existsSync(__dirname,'logs')){       // Creating 'logs' directory if it doesn't exist
            await fspromises.mkdir(path.join(__dirname,'logs'))
        }
        await fspromises.appendFile(path.join(__dirname,'logs'),logitem); // Appending the log entry to 'logs' file
    } catch (error) {
        console.log(error)
    }
}

module.exports = logevents      // Exporting the logevents function