const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://konain7:Kaunain%4099@cluster0.rmyvhx6.mongodb.net/cats').then(()=>console.log('connected to cat server'))

const catSchema = new mongoose.Schema({
  breed: { type: String, required: true },
  petName: { type: String, required: true, unique: true },
  age: { type: Number, required: true }
});

const catModel = mongoose.model('catModel', catSchema);

module.exports = catModel;