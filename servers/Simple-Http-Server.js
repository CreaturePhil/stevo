var chalk = require('chalk');
var express = require('express');
var morgan = require('morgan');
var path = require('path');

var simpleHttpServer = module.exports = {};

simpleHttpServer.startServer = function(port, logging) {
  var start = new Date();
  var app = express();

  if (logging) app.use(morgan('dev'));

  app.use(express.static(path.join(__dirname, '../../../')));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../../../**/*'));
  });

  app.listen(port, function() {
    port = chalk.green(port);
    console.log('Listening on port ' + port  + '... - Took ' + chalk.magenta(new Date() - start + ' ms') + ' to start up\n');
  });
};
