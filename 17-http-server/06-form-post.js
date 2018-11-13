#!/usr/bin/node
const http = require('http'),url = require('url'),qs = require('querystring');
var items = [];
http.createServer((req,res)=>{
  console.log(req.method);
  if(req.url === '/' && req.method === 'POST'){    
    var data = qs.parse(url.parse(req.url).qurey).item;
    console.log(data);
    if(typeof data !== undefined){
      items.push(data);
    }
    var body = '';
    req.on('data',function(chunk){body += chunk;});
    req.on('end',()=>{
      console.log(body);
      if(body){
        items.push(body);
      }
    });
    var html ='' 
      +'<!DOCTYPE html>'
      +'<html>'
      +'<head>'
      +'<title>hello</title>'
      +'<meta charset="utf-8">'
      +'</head>'
      +'<body>'
      +'  <h1>TodoList</h1>'
      +'  <form method="POST" action="/">'
      +'    <input type="text" name="item">'
      +'    <input type="submit" name="submit" value="提交">'
      +'  </form>'
      +'  <ul>'
      +items.map(function(item){return '    <li>'+item+'</li>';}).join('\n')
      +'  </ul>'
      +'</body>'
      +'</html>';
    res.statusCode = 200;
    res.end(html);
  }
  else{
    res.statusCode = 404;
    res.end('Error');
  }
}).listen(8080);
