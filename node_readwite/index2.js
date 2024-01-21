const fs = require('fs')
const path = require('path')
-
fs.readFile(path.join(__dirname, 'files', 'starter.txt'), "utf8", (err, data) => {
    if (err) throw err;
    console.log('data is read ; \n ', data)
})

console.log('helllo...')

fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), "nice to meet u Mithun", (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('write is complete')
})

fs.appendFile(path.join(__dirname, 'files', 'text.txt'), " \n testing text", (err) => {
    if (err) throw err;          //NOTE:- while using append file if the given file does'nt exist then it will create a new file of the given name and add the data to that file.
    console.log('append to text file is complete')     //note the sequence of operation(read, write,append) performed in the terminal.
})

// fs.rename(path.join(__dirname,'files','reply.txt'),path.join(__dirname,'files','reply_renamed.txt'),(err) => {
//     if (err) throw err;          
//     console.log('rename complete')    //renaming a file
// }) 


fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), "nice to meet u Mithun", (err) => {
    if (err) throw err;
    console.log('write is complete2')
    fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), "\n yes it is", (err) => {
        if (err) throw err;
        console.log('append complete2')
        fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'reply_renamed.txt'), (err) => {
            if (err) throw err;
            console.log('rename complete2')
        })
    })  //now this is looking like a callback hell
})

//checking if a file exists
const fileExists = fs.existsSync('example.txt');
console.log('File exists : ', fileExists)

//working with directory
fs.readdir(path.join(__dirname), (err, files) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Files in the directory:', files);
});

if (!fs.existsSync('./newDirectory')) {
    //making/creating a directory
    fs.mkdir('newDirectory', (err) => {  //(go to files and check their will be a new diectory created in the folder)
        if (err) {
            console.error(err);
            return;
        }
        console.log('Directory created.');
        // Removing a directory
        fs.rmdir('newDirectory', (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Directory removed.');
        });
    });
}





//exit on uncaught errors        
process.on('uncaughtException', err => {
    console.log(`there was an uncaught error: ${err}`)
    process.exit(1)
})