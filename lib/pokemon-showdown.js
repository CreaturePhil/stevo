/**
 * Module dependencies.
 */

var PokemonShowdown = require('../servers/Pokemon-Showdown/init');

var fs = require('fs');
var path = require('path');
var sugar = require('sugar');

var commands = require('../servers/Pokemon-Showdown/commands.js').commands;
var config = require('../servers/Pokemon-Showdown/config/config');
var utils = require('./utils');

module.exports = {

  /**
   * Parses options and starts up a Pokemon Showdown server.
   *
   * @param {Object} options
   */
  initialize: function(options) {
    if (utils.getType(options) === 'Object') {
      for (var props in options) {
        if (this.ops[props]) {
          this.ops[props](options[props]);
        }
      }
    }

    PokemonShowdown.startServer(config);
  },

  /**
   * Options' operations that parses options to be use to configure the server.
   */
  ops: {

    /**
     * Adds the owner as a adminstarator in the Pokemon Showdown server.
     *
     * @param {String} username
     */
    owner: function(username) {
      username = utils.toId(username);
      var buffer = [];
      var file = path.join(__dirname, '../servers/Pokemon-Showdown/config/usergroups.csv');
      var match = false;
      var user = username + ',~';

      var data = String(fs.readFileSync(file)).split('\n');

      for (var i = 0; i < data.length; i++) {
        if (!data[i]) continue;
        if (data[i].split(',')[0] === username) match = true;
        buffer.push(data[i]);
      }

      if (!match) {
        buffer.push(user);
        fs.writeFileSync(file, buffer.join('\n'));
      }
    },

    /**
     * Parses the data to the Pokemon Showdown's configuration. 
     *
     * @param {Object} data
     */
    config: function(data) {
      for (var props in data) {
        if (config[props]) {
          config[props] = data[props];
        }
      }
    },  

    /**
     * Adds the user's custom commands to the Pokemon Showdown Server.
     *
     * @param {Object} cmds
     */
    commands: function(cmds) {
      Object.merge(commands, cmds);
    }

  }
};
