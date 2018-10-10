#!/usr/bin/node

var a1 = require('./02-export-var.js');
var a2 = require('./02-export-function.js');
var a3 = require('./02-export-object.js');

var obj = {
  k1:a1,
  k2:a2,
  k3:a3
};
module.exports = obj;


