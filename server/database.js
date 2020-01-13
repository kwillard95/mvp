var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fidosfriends', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('DB is connected!')
})