const mongoose = require('mongoose');
const db = require('./database.js');
const User = require('./model.js');

module.exports = {
  createUser: (req, res) => {
    var newUser = new User (req.body)
    newUser.save((err, user) => {
      if (err) return console.error(err);
      console.log(user.email + ' saved to users')
      res.send(user.email + ' saved to users')
    })
  },
  findUser: (req, res) => {
    User.findOne({ email: req.query.ID }, (err, user) => {
      if (err) return console.error(err);
      console.log(user);
      res.send(user);
    })
  },
  findFriends: (req, res) => {
    User.find({topParks: req.query.park}, (err, user) => {
      if (err) return console.error(err);
      console.log(user);
      res.send(user);
    })
  }
}