#!/usr/bin/node

const http = require('http'),qs = require('querystring'),url = require('url');
var items=[];
http.createServer((req,res)=>{
  //console.log(req.method);
  switch(req.method){
  case 'GET':
    select(req,res);
    break;
  case 'POST':
    add(req,res);
    break;
  case 'DELETE':
    remove(req,res);
    break;
  case 'PUT':
    update(req,res);
    break;
  default:
    break;
  }
}).listen(8080);

function add(req,res){
  var data = '';
  req.on('data',(chunk)=>{
    data += chunk;
  });
  req.on('end',()=>{
    var d = qs.parse(data).item;
    items.push(d);
  });
  res.end('OK!');
}
function remove(req,res){
  if(req.url==='/'){
    items=[];
  }
  else{
    var id = qs.parse(url.parse(req.url).query).id;
    console.log('ID:',id);
  }
  if(id>=0 && id<items.length){
    items.splice(id,1);
  }
  res.end('OK!');
}
function update(req,res){
  var arg = req.url.split('/');
  if(arg[1]===''){
    items = [];
  }
  var item = '';
  res.setHeader('Access-Control-Allow-Origin','*');
  req.on('data',(chunk)=>{
    item += chunk;
  });
  req.on('end',()=>{
    var i = parseInt(arg[1]);
    if(!items[i]){
      res.statusCode = 404;
      res.end('Not Found!');
    }else{
      items[i]=item;
      res.statusCode = 200;
      res.end('OK!');
    }
  });

  res.end('OK!');
}
function select(req,res){
  var msg = JSON.stringify(items);
  res.statusCode = 200;
  res.setHeader('Content-Type','application/json');
  res.setHeader('Content-Length',Buffer.byteLength(msg));
  res.end(msg);
}


