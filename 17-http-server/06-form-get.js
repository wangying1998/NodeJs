#!/usr/bin/node
const http = require('http'),url = require('url'),qs = require('querystring');

var items = ['吃饭'];

http.createServer((req,res)=>{
  var path = url.parse(req.url).pathname;
  if(path !== '/'){
    res.statusCode = 404;
    res.end('Error');
  }
  else{
    var data = qs.parse(url.parse(req.url).query).item;
    if(typeof data !== 'undefined'){
      items.push(data);
    }
    var html ='' 
      +'<!DOCTYPE html>'
      +'<html>'
      +'<head>'
      +'<title>hello</title>'
      +'<meta charset="utf-8">'
      +'</head>'
      +'<body>'
      +'  <h1>TodoList</h1>'
      +'  <form method="GET" action="/">'
      +'    <input type="text" name="item">'
      +'    <input type="submit" name="submit" value="提交">'
      +'  </form>'
      +'  <ul>'
      +items.map(function(item){if(item){return '    <li>'+item+'</li>';}}).join('\n')
      +'  </ul>'
      +'</body>'
      +'</html>';
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Length', Buffer.byteLength(html));
    res.statusCode = 200;
    res.end(html);
  }
}).listen(8080);
