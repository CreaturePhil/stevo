# stevo [![Build Status](https://travis-ci.org/CreaturePhil/stevo.svg)](https://travis-ci.org/CreaturePhil/stevo) [![Dependency Status](https://david-dm.org/creaturephil/stevo.svg)](https://david-dm.org/creaturephil/stevo) [![devDependency Status](https://david-dm.org/creaturephil/stevo/dev-status.svg)](https://david-dm.org/creaturephil/stevo#info=devDependencies)

Quick and easy web framework.

### Get a server up and running in one line.
```js
require('stevo').createServer('PokemonShowdown');
```

### Installation
```
npm install stevo
```

## Table of Contents

  * [Getting Started](#getting-started)
  * [Documentation](#documentation)
  * [Contributing](#contributing)
  * [License](#license)

Getting Started
---------------
Install [Node.js](http://nodejs.org/) on your computer.
stevo is installed and run using a command line.  In Windows, open Command Prompt (type cmd into the Start menu and it should be the first result). In Mac OS X, open `Terminal` (it's in Utilities). Type this into the command line:

```
$ npm install stevo
```

Then create a file in a text editor and save it as ```app.js```. Type this in it (Don't type the lines with the //):

```js
// app.js
var stevo = require('stevo');

// Create a Pokemon Showdown server and add yourself as admin.
stevo.createServer('ps', {
  owner: 'Your Pokemon Showdown Username here'
});
```

Save this file and then go back to the command line and type this to start up the server:

```
$ node app.js
```

Open up your browser and go to ```http://localhost:8000``` to go on your server locally.

Documentation
-------------

  * [`createServer`](#createserver)
  * [Simple Http Server](#simple-http-server)
    - [`port`](#port)
    - [`logging`](#logging)
  * [Pokemon Showdown](#pokemon-showdown)
    - [`owner`](#owner)
    - [`config`](#config)
    - [`commands`](#commands)

## createServer(type, options)
Create a new server depending on types with configurations from the options.

__Arguments__

* `type` - An string that determines what type of server is created.
* `options` - A object that sets the configuration of the server.

__Examples__


```js
// Simple Http Server
stevo.createServer('http', { port: 8080 });

// Pokemon Showdown Server
stevo.createServer('http', { owner: 'CreaturePhil', config: { port: 3000 } });
```

## Simple Http Server
```js
stevo.createServer('simpleHttpServer', {
  port: 3000,       // Set the port
  logging: true     // module `morgan` logging
});
```
Sets up a Simple Http Server using express. Sends all files starting at root of your project.
Index route (/) sends `index.html` by default. Alternative type is `http`.

<a name="port" />
### port
Sets the port for the server. Defaults to `3000`.

<a name="logging" />
### logging
Turns module `morgan` logging on or off. Defaults to `true`. Uses `morgan(dev)` which shows concise output colored by response status for development use.
`:method :url :status :response-time ms - :res[content-length]`

## Pokemon Showdown
```js
stevo.createServer('PokemonShowdown', {
  owner: 'CreaturePhil',
  config: {
    port: 3000,
    reportbattles: false
  },
  commands: {
    yo: function(target, room, user, connection, cmd) {
      this.sendReply('yo');
    }
  }
});
```
Sets up a [Pokemon-Showdown](https://github.com/CreaturePhil/Pokemon-Showdown) server. Default `port` is `3000`.

<a name="owner" />
### owner
Sets the username as an admin on the server. Writes to `usergroups.csv` file.

<a name="config" />
### config
Sets up the configuration for Pokemon Showdown. For more infomation, visit the [`config.js` file](https://github.com/CreaturePhil/Pokemon-Showdown/blob/master/config/config.js) for all configuration options you can set in config.

<a name="commands" />
### commands
Add custom commands to Pokemon Showdown. For more infomation, visit the [`config/commands.js` file](https://github.com/CreaturePhil/Pokemon-Showdown/blob/master/config/commands.js) for the command's api.

Contributing
------------

#### Bug Reports & Feature Requests
Please use the [issue tracker](https://github.com/creaturephil/usub/issues) to report any bugs or file feature requests.

#### Code Style
This project uses [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) with a few minor exceptions. If you are submitting a pull request that involves Jade templates, please make sure you are using *spaces*, not tabs.

License
-------
[MIT](License)
