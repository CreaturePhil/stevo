var fs = require('fs');
var path = require('path');
var utils = require('./utils');
var sugar = require('sugar');
var PokemonShowdown = require('../servers/Pokemon-Showdown/init');
var config = require('../servers/Pokemon-Showdown/config/config');
var commands = require('../servers/Pokemon-Showdown/commands.js').commands;
var simpleHttpServer = require('../servers/Simple-Http-Server');

module.exports = {
  ps: 'pokemonshowdown',
  pokemonshowdown: {
    initialize: function(options) {
      if (options) {
        for (var props in options) {
          if (this.ops[props]) {
            this.ops[props](options[props]);
          }
        }
      }

      PokemonShowdown.startServer(config); 
    },
    // operations on options
    ops: {
      /* Adds owner as adminstrator in the Pokemon Showdown server */
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

      config: function(data) {
        for (var props in data) {
          if (config[props]) {
            config[props] = data[props];
          }
        }
      },

      commands: function(cmds) {
        Object.merge(commands, cmds);
      }
    }
  },

  http: 'simplehttpserver',
  simplehttpserver: {
    initialize: function(options) {
      if (options) {
        simpleHttpServer.startServer(options.port || 3000, options.logging || true);
      }
      simpleHttpServer.startServer(3000, true);
    }
  }
};
