#!/usr/bin/node

const http = require('http');

http.createServer((req,res)=>{
  if(req.url==='/'){
    var html = 
        '<!DOCTYPE html>'
        +'<html>'
        +'<head>'
        +'<title>hello</title>'
        +'<meta charset="UTF-8">'
        +'</head>'
        +'<body>'
        +  '<h1>Hello World</h1>'
        +'</body>'
        +'</html>';
  
    res.writeHead(200,{
      'Content-Type':'text/html',
      'Content-Length':Buffer.byteLength(html)
    });
  }
}).listen(8080);

