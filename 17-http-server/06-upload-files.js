#!/usr/bin/node

const http = require('http'),fs = require('fs'),log = console.log;

http.createServer((req,res)=>{
  if(req.url==='/' && req.method==='POST'){
    console.log(req.headers);
    var data = '';
    req.setEncoding('binary');
    req.on('data',(chunk)=>{
      data += chunk;
    });
    req.on('end',()=>{
      log(data);
      var das = data.split('\r\n');
      var filename = das[1].split(';')[2].split('=')[1];
      log('filename:',filename);
      var filedata = das[4];
      log('filedata:',filedata);
      fs.writeFileSync(filename,filedata);
    });
    res.end('OK!');
  }
  else{
    res.statusCode = 404;
    res.end('Error');
  }

}).listen(8080);

