// const EventEmitter = require('events');
// class MyEmitter extends EventEmitter {}
// const myEmitter = new MyEmitter();
// myEmitter.on('waterfull', () => {
//     console.log('please turn off the motor!'); 
//     setTimeout(() => {
//         console.log('please turn off the motor! its a gentle reminder');
//     }, 3000);
// });
// console.log("script is running")
// myEmitter.emit('waterfull');
// console.log("the script is still running")


//#create a node.js program using eventemitter to simulate a ticket booking system .attach multiple listners to a 'booked and emit it with a user
//  name.
const EventEmitter=require ('events');
const booking = new EventEmitter();
booking.on('booked',(user)=>{
    console.log(`Email sent ${user}`)
});
booking.on('booked',(user)=>{
    console.log(`booking recoreded in the system for ${user}`)
});
booking.on('booked',(user,seattype)=>{
    console.log(`ticket generated for ${user}`)
});
booking.emit('booked','manish','vip');
booking.emit('booked','raj','regular');
booking.emit('booked','ameesha','premium');