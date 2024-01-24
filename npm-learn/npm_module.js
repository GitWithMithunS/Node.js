console.log('testing')

const {format} = require('date-fns')   //package from npm that provides use info about date time
const {v4:uuid} = require('uuid')  //it is a package from npm that enerated an unique id
//u can now about such packages/modules form npm documentation

console.log('hello')
console.log(format(new Date() , 'yyyyMMdd\thh:mm:ss')) //note mm-minute and MM-month
console.log(uuid())
