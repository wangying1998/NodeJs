#!/usr/bin/node

var fs = require('fs');
var file = process.argv[2] || __filename;

fs.readFile(file,(err,data)=>{
  if(err){
    console.log(err.message);
    process.exit(1);
  }
  else{
    console.log(data.toString('utf8')); 
  }
});
var fid = fs.openSync(file,'r');
var len = fs.statSync(file).size;
var buf = new Buffer(len);
fs.readSync(fid,buf,0,len);

fs.writeSync(1,buf);
console.log(fs.readFileSync(fid).toString('utf8'));

fs.closeSync(fid);

