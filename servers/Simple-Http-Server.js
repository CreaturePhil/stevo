var express = require('express');
var morgan = require('morgan');
var path = require('path');

var simpleHttpServer = module.exports = {};

simpleHttpServer.startServer = function(port, logging) {
  var app = express();

  if (logging) app.use(morgan('dev'));

  app.use(express.static(path.join(__dirname, '../../../')));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../../../**/*'));
  });

  app.listen(port, function() {
    console.log('Listening on port ' + port + '...\n');
  });
};
