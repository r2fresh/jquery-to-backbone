
var express = require('express');
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World!');
  console.log('Hello World!')
});

//app.use(express.static('public'));
app.use(express.static('public'));

app.post('/status', function (req, res) {
    var data = {"text":req.body.text};
    res.end( JSON.stringify(data) );
    console.log(req.body.text)
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
