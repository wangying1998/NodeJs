#!/usr/bin/node

const fs = require('fs');

var src = process.argv[2],
    dst = process.argv[3];

fs.writeFile(dst,fs.readFileSync(src),(err)=>{
  if(err){
    console.log(err.message);
    process.exit(1);
  }
});

