const fs = require('fs');

const readStream = fs.createReadStream('./file.txt', {encoding:'utf-8', start:0, end:3});

readStream.on('data', (chunk) => {
    console.log("received chunk:\n", chunk);
});

readStream.on('end', () => {
    console.log("finished reading the file");
});

readStream.on('error', (err) => {
    console.log("error in reading the file", err);
});