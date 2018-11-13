#!/usr/bin/node

const http = require('http');

http.createServer((req,res)=>{
  console.log(req.method);
  switch(req.method){
    case 'GET':
      select(req,res);
      break;
    case 'POST':
      add(req,res);
      break;
    case 'DELETE':
      Delete(req,res);
      break;
    case 'PUT':
      update(req,res);
      break;
    default:;
  }

  res.end();
}).listen(8080);

function add(){}
function Delete(){}
function update(){}
function select(){}


