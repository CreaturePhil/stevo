var expect = require('chai').expect;
var stevo = require('../index');

describe('Creating servers', function() {
  describe('Simple Http Server', function() {
    it('should return the server instance when creating the server', function() {
      var server = stevo.createServer('http');
      expect(server).to.be.a('object');
      server.close();
    });
  });
});
