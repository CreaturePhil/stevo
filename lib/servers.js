var fs = require('fs');
var path = require('path');
var utils = require('./utils');
var PokemonShowdown = require('../servers/Pokemon-Showdown/init');

module.exports = {
  ps: 'pokemonshowdown',
  pokemonshowdown: {
    initialize: function(options) {
      for (var props in options) {
        if (this.ops[props]) {
          this.ops[props](options[props]);
        }
      }

      PokemonShowdown.startServer(); 
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
      }
    }
  }
};
