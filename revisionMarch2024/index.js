const express = require('express')
const mongoose = require('mongoose')
const app = express();




async function middleware(req,res,next){
    let username  = req.body.username
    let team = req.body.team

    const ninjaExist = await Shinobi.findOne({ninjaName:username})
    const time = await Shinobi.findOne({ninjaName:username})

    console.log(time.createdAt.getHours() + ' ' + time.createdAt.getMinutes())



    if(ninjaExist){
        
        return res.json({warning:'Ninja already Exist choose another username'})
    }
    if(username  && team){
      return   next()
    }

    
   return  res.json({warning:'you missed the username or team'})
}

mongoose.connect('mongodb+srv://konain7:Kaunain%4099@cluster0.rmyvhx6.mongodb.net/leafvillage')
.then(()=>console.log('leaf village connected now'))

const shinobiSchema = new mongoose.Schema({
    ninjaName:{
        type:String,
        require:true,
        unique:true
    },
    team:{
        type:Number,
        require:true
    }
},{timestamps:true}
)

const Shinobi = mongoose.model('shinobi',shinobiSchema)



app.get('/',(req,res)=>{
    res.send('hello')
})

app.use(express.json())



app.post('/signin',middleware,async(req,res)=>{

   let team = await Shinobi.create({ninjaName:req.body.username,
        team:req.body.team})

    res.json({user :team})

})


app.listen(3090)