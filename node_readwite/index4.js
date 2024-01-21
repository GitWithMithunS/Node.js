//how to manage read and write operations if the files is very  large
//it should be managed in small parts or chunks.

const fs = require('fs')

const rs = fs.createReadStream('./files/lorem.txt',{encoding:'utf8'})    //The { encoding: 'utf8' } option specifies that the stream should interpret the data as UTF-8 encoded text.
const wr = fs.createWriteStream('./files/new-lorem.txt',{encoding:'utf8'}) //Again, { encoding: 'utf8' } specifies that the stream should write data as UTF-8 encoded text.
//The createReadStream method is used to create a readable stream (here:rs) from the file ./files/lorem.txt
//The createWriteStream method is used to create a writable stream (wr) for the file ./files/new-lorem.txt

rs.on('data',(dataChunk) => { //The data event is emitted by the readable stream (rs) whenever it has data available to be read.
    wr.write(dataChunk)      //The provided callback function is executed each time a chunk of data is received.
})
// //this is more effective way
// rs.pipe(wr)    //The pipe method is a built-in method provided by Node.js readable streams. It establishes a unidirectional flow of data from a readable stream to a writable stream. The syntax is readableStream.pipe(writableStream)
//When rs.pipe(wr) is called, it sets up the piping mechanism. Data read from the readable stream (rs) is automatically forwarded to the writable stream (


// As the readable stream (rs) reads data from the source file (./files/lorem.txt), it emits data events.
// The callback function attached to the data event writes each data chunk to the writable stream (wr), which in turn writes the data to the destination file (./files/new-lorem.txt).


// NOTE:-
// createReadStream:
// Creates a readable stream that allows you to read data from a file in chunks.
// Efficient for handling large files, as it reads and processes data in smaller, manageable pieces.
// Suitable for scenarios where you want to process data as it's being read, reducing memory consumption.
// javascript
// createWriteStream:
// Creates a writable stream that allows you to write data to a file in chunks.
// Efficient for handling large datasets, especially when the data is generated or processed in smaller chunks.
// Suitable for scenarios where you want to start writing data as soon as it becomes available.
// javascript

// readFile:
// Reads the entire contents of a file into memory and returns the content as a buffer or a string (based on the specified encoding).
// Suitable for small to moderately sized files where loading the entire content into memory is feasible.
// May not be optimal for extremely large files due to potential memory constraints.
// javascript
// writeFile:
// Writes data to a file in one go. It replaces the entire contents of the file.
// Suitable for scenarios where you have the entire content ready to be written at once.
// May not be optimal for scenarios with very large datasets or when writing data incrementally over time.
// javascript

// conslusion:-
// Use streams when dealing with large files or when you want to process data in smaller chunks for efficiency and reduced memory usage.
// Use readFile and writeFile for smaller files or when the entire file can be read into memory without causing performance issues