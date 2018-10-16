#!/usr/bin/node

const fs = require('fs');
var lnk = process.argv[2];

var msg = fs.readlinkSync(lnk);
console.log(msg);
