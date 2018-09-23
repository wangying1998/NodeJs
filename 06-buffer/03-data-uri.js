#!/usr/bin/node

const http = require('http');
      fs = require('fs');
      path = require('path');
      file = process.argv[2];

if(process.argv.length !== 3){
  console.log('命令行参数不正确！');
  process.exit(1);
}

try{
  var data = fs.readFileSync(file).toString('base64');
} catch(e){
  console.error(e.message);
  process.exit(2);
}

var ext = path.extname(file);
var uriData = 'data:image/' + ext.slice(1,ext.length)+';base64,' + data;

var html = "<!DOCTYPE html><title>hello</title><html><body><img alt='" + path.basename(file,ext) + "' src= '" + uriData + "'></body></html>"

http.createServer((req,res)=>{
  res.end(html);
}).listen(8080);

