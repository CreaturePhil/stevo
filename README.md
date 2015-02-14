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
TODO

Contributing
------------

#### Bug Reports & Feature Requests
Please use the [issue tracker](https://github.com/creaturephil/usub/issues) to report any bugs or file feature requests.

#### Code Style
This project uses [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) with a few minor exceptions. If you are submitting a pull request that involves Jade templates, please make sure you are using *spaces*, not tabs.

License
-------
[MIT](License)
