const { log } = require("node:console");

let x=2;
let y=3;
let result = x+y;
//console.log(result);
async function fetchdata(){
    let fetchdata= await fetch('https://bvgfdcsxazjmnhbgfvd');
        console.log(fetch.json);
}
fetchdata()
console.log(result);