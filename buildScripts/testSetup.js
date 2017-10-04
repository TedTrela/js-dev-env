//not transpiled
require('babel-register')();

//Mocha doesn't understand .css imports
require.extensions['.css']= function() {};
