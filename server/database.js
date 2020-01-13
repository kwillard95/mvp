const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/fidosfriends';
const db = mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })

module.exports = db;
