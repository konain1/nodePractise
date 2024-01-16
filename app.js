const express = require('express')

const app = express();
const fs = require('fs')


for(let i = 1;i<100;i++){
    fs.writeFileSync('file.txt',`hello world ${i}`,{flag:'a'});
}
app.get('/',(req,res)=>{

    const stream = fs.createReadStream('file.txt','utf-8')
    stream.on('data',(chunks)=>{
        res.write(chunks)
    })
    
    stream.on('end',()=>{
        res.end();
    })
})

// app.get('/',(req,res)=>{

//     fs.readFile('file.txt',(err,data)=>{
//         res.end(data)
//     })
// })

app.listen(5002)