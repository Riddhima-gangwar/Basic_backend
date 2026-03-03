const fs=require('fs');

// fs.readFile('file.txt','utf8',(err,data)=>{
//     console.log(err,data);
// })

// const a=fs.readFileSync('file.txt','utf8');
// console.log(a);

fs.writeFile('file.txt',"this is a data", ()=>{
    console.log("written to the file")
});

// const a=fs.writeFileSync('file.txt',"this is data");
// console.log(a);

// fs.appendFile('file.txt','\nthis is append',(err)=>{
//     console.log("appended");
// });

// // fs.appendFileSync('file.txt','\nadded line');
// // console.log("appended");

// fs.rename('newfile.txt','file.txt',(err)=>{
//     if(err) throw err;
//     console.log("renamed");
// })

// fs.renameSync('file.txt','newfile.txt');
// console.log("renamed");

// fs.unlink('file.txt',(err)=>{
//     if(err)throw err;
//     console.log("file deleted");
// });

// fs.unlinkSync('file.txt');
// console.log("file deleted");

// fs.copyFile('file.txt','copy.txt',(err)=>{
//     if(err)throw err;
//     console.log("copied");
// });

// fs.copyFileSync('file.txt','copy.txt');
// console.log("copied file");



console.log("finished reading file");