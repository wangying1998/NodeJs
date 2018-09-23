#!/usr/bin/node

var file = process.argv[2];
const fs = require('fs');
      log = console.log;

if(process.argv.length !== 3){
  console.log("命令行参数不正确！");
  process.exit(1);
}

try{
  var buf = fs.readFileSync(file);
}catch(e){
  console.error(e.message);
  process.exit(2);
}

if(buf.toString('ascii',0,2)==='BM')
{
  log('width:',buf.readInt32LE(0x12));
  log('height:',buf.readInt32LE(0x16));
  log('color depth:',buf.readInt16LE(0x1C));
}
