const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('waterfull', () => {
    console.log('please turn off the motor!'); 
    setTimeout(() => {
        console.log('please turn off the motor! its a gentle reminder');
    }, 3000);
});
console.log("script is running")
myEmitter.emit('waterfull');
console.log("the script is still running")
