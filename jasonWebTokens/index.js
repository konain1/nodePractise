
const express = require('express')
const {getMethod, NewPet} = require('./functionss/allfunctions')
const catModel = require('./db/db');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());


// app.use('/',getMethod)

app.use('/newpet',NewPet)

app.listen(4044,()=>console.log('connected to 4044'))