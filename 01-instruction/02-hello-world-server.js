#!/usr/bin/node

const http = require("http");

http.createServer((req,res)=>{
  console.log(req.headers);

  res.end("hello");
}).listen(8080);


