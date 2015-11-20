var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.sendFile(__dirname + '/web/');
});

app.use('/', express.static(__dirname + '/web/'));

//var webFolder = 'web';

//app.use(express.static(__dirname + webFolder));
//app.use(app.router);

var server = app.listen(9000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});