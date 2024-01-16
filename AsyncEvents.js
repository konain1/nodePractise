const EventEmitter = require('node:events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();




myEmitter.on('event', (a, b) => {
    
  setImmediate(() => {
    console.log('this happens asynchronously');
    
  });
console.log('second emit')
});

myEmitter.on('event',()=>{
    
    
    console.log('first emit')
})

myEmitter.emit('event', 'aync', 'sync');