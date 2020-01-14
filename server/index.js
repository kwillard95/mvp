const express = require('express')
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const Controller = require('./controller.js')
const port = 3000

app.use("/", express.static("./dist"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/user", (req, res) => {
  Controller.findUser(req, res);
})

app.post("/newuser", (req, res) => {
  Controller.createUser(req, res);
  console.log(req.body);
})

app.listen(port, () => console.log(`Boomer\'sBuds listening on port ${port}!`))