#!/usr/bin/node

const cp = require('child_process');

console.log(cp.execFileSync('cat',['./02-child.js']).toString('utf8'));

