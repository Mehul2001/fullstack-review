const express = require('express');
const bodyParser = require('body-parser')
const getReposByUsername = require('../helpers/github.js')
let app = express();
app.use(bodyParser.json())
app.use(express.static(__dirname + '/../client/dist'));
let port = 1128;

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  // call the getReposbyusername()
  console.log(req.body);
  console.log(getReposByUsername);
  getReposByUsername(req.body.term);
  res.send('POST request to /repos');

  // var getRepo = getReposByUsername("Mehul2001");
  // console.log(getRepo);
});



app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  res.send(req.body);
});



app.listen(port, function () {
  console.log(`listening on port ${port}`);
});

