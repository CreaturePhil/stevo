/**
 * Module dependencies.
 */

var servers = require('./servers');
var utils = require('./utils');

/**
 * stevo prototype.
 */

var stevo = exports = module.exports = {};

/**
 * Create a type of server depending on the user's choice.
 *
 * @param {String} type
 * @param {Object} options
 */
stevo.createServer = function(type, options) {
  var choice = servers[type.toLowerCase()];
  if (choice) {
    getType(choice) === 'Object' && choice.initialize(options); 
    getType(choice) === 'String' && servers[choice].initialize(options);
  } else {
    console.err('That server type is not found.');
  }
};
