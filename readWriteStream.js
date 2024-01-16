const { log } = require('console');
const fs = require('fs')

const main =  ()=>{

    const readStream = fs.createReadStream('file.txt');
    const writeStream = fs.createWriteStream('fileCopy.txt')

    readStream.on('data',(buffer)=>{
        log(`Data >>`)
        // console.log(buffer.toString())
        log(buffer)
        // it will copy buffer chunks into fileCopy.txt
        writeStream.write(buffer)
    })
    readStream.on('end' , ()=>{
        console.log('ended')
    })
}
main();