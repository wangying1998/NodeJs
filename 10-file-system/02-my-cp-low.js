#!/usr/bin/node

const fs = require('fs');

var src = process.argv[2],
    dst = process.argv[3];

var fid = fs.openSync(src,'r');
var len = fs.statSync(src).size;

var buf = new Buffer(len);

fs.writeSync(fid,buf,0,len);

fs.closeSync(fid);:wq

