function doHomework(subject,callback)
{
    console.log(`starting my ${subject} homework`);
    callback();
}
// function finishedHomework(){
//     console.log("finished homework");
// }
//doHomework('math',finishedHomework);


// doHomework('math',function(){
//     console.log("finished homework");
// });

doHomework('math',()=>{
    console.log("finifed homework");
});