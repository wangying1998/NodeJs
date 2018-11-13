#!/usr/bin/node

const http = require("http");

const server = http.createServer();
server.on("request",(req,res)=>{
  console.log(req.headers);
  req.on('data',(data)=>{
    console.log(data);
  });
  req.pipe(process.stdout);

  res.end("OK");
});

server.listen(8080);

