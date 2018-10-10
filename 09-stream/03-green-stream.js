#!/usr/bin/node

const Writeable = require('stream').Writable,
      util = require('util');

function GreenStream(){
  Writeable.call(this);
}

GreenStream.prototype._write = function(chunk){
  process.stdout.write('\033[1;32m' + chunk.slice(0,chunk.length-1) + '\033[1;37m');
  cb;
}

util.inherits(GreenStream,Writeable);

var dst = new GreenStream();
process.stdin.pipe(dst);

