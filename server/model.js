const mongoose = require('mongoose');
const db = require('./database.js');

const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  city: String,
  state: String,
  pupname: String,
  breed: String,
  age: Number,
  gender: String,
  topParks: Array,
  coordinates: Array
});

var User = mongoose.model('User', userSchema);

module.exports = User;

