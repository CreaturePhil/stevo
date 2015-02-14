/**
 * Module dependencies.
 */

var SimpleHttpServer = require('../servers/Simple-Http-Server');
var utils = require('./utils');

module.exports = {

 /**
  * Parses options and starts up a Simple Http server using express.
  *
  * @param {Object} options
  * @return {Object} server instance
  */
  initialize: function(options) {
    if (utils.getType(options) === 'Object') {
      SimpleHttpServer.startServer(options.port || 3000, options.logging || true);
    }
    return SimpleHttpServer.startServer(3000, true);
  }

};
