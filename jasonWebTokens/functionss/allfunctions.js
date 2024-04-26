const catModel = require("../db/db");

async function getMethod(req, res) {
  res.json("getMethods");
}

async function NewPet(req, res) {
  let { name, breed, age } = req.body;
  console.log(name)
  try {
    const newCat = await catModel.create({ petName: name, age: age, breed: breed });
    res.status(201).json(newCat);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

module.exports = { getMethod, NewPet };