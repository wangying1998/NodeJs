#!/usr/bin/node

const fs = require('fs');

var src = process.argv[2],dst = process.argv[3];
try{
  fs.writeFileSync(dst,fs.readFileSync(src));
}catch(err){
  console.log(err.message);
  process.exit(1);
}
