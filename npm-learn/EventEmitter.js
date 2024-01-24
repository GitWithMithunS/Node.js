const {format} = require('date-fns')   
const {v4:uuid} = require('uuid')

const fs = require('fs');
const fspromises = require('fs').promises;
const path= require('path')

console.log('hi event emitter')
const logevents = async (message) => {
    const datetime  = `${format(new Date() , 'yyyyMMdd /t HH:mm:ss')}`
    const logitem = `${datetime} \t ${uuid()} \t ${message}`
    console.log(logitem)
    try {
        await fs.promises.appendFile(path.join(__dirname,'logs','eventlog.txt'),logitem);
    } catch (error) {
        console.log(error)
    }
}

module.exports = logevents