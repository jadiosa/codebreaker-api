var express = require('express');
const CodeBreaker = require('./code-breaker');

var app = express();

app.get('/setsecret/:secret', function (req, res) {
  number = req.params.secret;
  CodeBreaker.setSecret(number);
  res.send({message: 'ok, let the game begin'});
});

app.get('/guess/:number', function (req, res) {
  number = req.params.number;
  res.send({result: CodeBreaker.codeBreaker(number)});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
