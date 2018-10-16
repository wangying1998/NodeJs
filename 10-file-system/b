#!/usr/bin/node

const fs = require('fs');

var file = process.argv[2];

//fs.unlinkSync(file);

fs.unlink(file,function(err,data){
  if(err){
    console.log(err.message);
    process.exit(1);
  }
  else{
    console.log(data.toString('utf8'));
  }
});

