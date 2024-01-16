const EventEmitter = require('events')
const http = require('http')

const myEmiiter =  new EventEmitter();


myEmiiter.on('log',()=>{
    console.log('logging')
})


// creating a sever using Emitter

const server = http.createServer();

server.on('request',(req,res)=>{
    res.end('welcome to EventEmitter server')
})

server.listen(5001)
myEmiiter.emit('log')