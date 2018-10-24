#!/usr/bin/node

const http = require('http'),fs = require('fs'),path = require('path'),util = require('util'),log = util.debuglog('wd');

var file;    // requst file in URL
http.createServer((req,res)=>{
  log(req.headers);
  log();
  log(req.url);
  file = path.join(__dirname,req.url);
  log();
  log(file);

  var read = fs.createReadStream(file);
  read.on('error',(err)=>{
    res.end(err.message);

  });
  read.pipe(res);

}).listen(8080);
