require('./index').createServer('PokemonShowdown', {
  owner: 'CreaturePhil',
  config: {
    port: 3000
  },
  commands: {
    stevo: function(target, room, user, connection, cmd) {
      this.sendReply('yo');
    }
  }
});
