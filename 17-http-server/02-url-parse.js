#!/usr/bin/node

const http = require('http'),url = require('url'),qs = require('querystring');

http.createServer((req,res)=>{
  console.log('url:',req.url);
  console.log('pathname:',url.parse(req.url).pathname);
  console.log('query String:',url.parse(req.url).query);
  console.log('qs parse:',qs.parse(url.parse(req.url).query));

  res.end('OK!');
}).listen(8080);



