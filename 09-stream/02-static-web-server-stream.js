#!/usr/bin/node

const http = require('http');
      fs = require('fs');
      log = console.log;

var web = http.createServer();
web.listen(8080);

web.on('request',(req,res)=>{
  log('=============');
  log(req.headers);

  var file = __dirname + req.url;

})


