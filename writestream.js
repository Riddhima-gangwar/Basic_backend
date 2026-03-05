const fs=require('fs');
const writeStream = fs.createWriteStream('file.txt');
writeStream.write("hello this is line 1");
writeStream.write("this is line 2");
writeStream.write("this is line 3");

writeStream.end();
writeStream.on('finish',()=>{
    console.log("all data is written to file.txt");
})
writeStream.on('error',(err)=>{
    console.error("error in writing to the file ",err);
})