/**
 * Module dependencies.
 */

var chalk = require('chalk');
var PokemonShowdown = require('./pokemon-showdown');
var SimpleHttpServer = require('./simple-http-server');
var utils = require('./utils');

/**
 * stevo prototype.
 */

var stevo = module.exports = {};

/**
 * Create a type of server depending on the user's choice.
 *
 * @param {String} type
 * @param {Object} options
 */
stevo.createServer = function(type, options) {
  var choice = this.handleServer[type.toLowerCase()];
  if (choice) {
    return (utils.getType(choice) === 'Object' && choice.initialize(options)) ||
           (utils.getType(choice) === 'String' && this.handleServer[choice].initialize(options));
  } else {
    var err = 'That server type is not found.';
    console.log(chalk.red(err));
    return new Error(err);
  }
};

/**
 * Handle which server get started.
 */
stevo.handleServer = {
  ps: 'pokemonshowdown',
  pokemonshowdown: PokemonShowdown,
  http: 'simplehttpserver',
  simplehttpserver: SimpleHttpServer
};
