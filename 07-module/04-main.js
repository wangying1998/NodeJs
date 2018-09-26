#!/usr/bin/node

var num = require('./04-num.js');

var n1 = new num();
var n2 = new num();

n1.add();
n1.add();
console.log(n1.getNum());

n2.add();
console.log(n2.getNum());
