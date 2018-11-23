#!/usr/bin/node

const http = require('http'),url =require('url');

http.createServer((req,res)=>{
  //console.log(req.headers); 

  if(url.parse(req.url).pathname==='/' && req.method=== 'POST'){
    req.on('data',(data)=>{
      console.log('data: ',data.toString('utf8'));
      data = JSON.parse(data);
      console.log('tel: ',data.tel);
      console.log('pwd: ',data.pwd);

    });

    req.on('end',()=>{
      console.log('over');
    });
  }

  res.setHeader('Access-Control-Allow-Methods','*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,XFILENAME,XFILECATEGORY,XFILESIZE');
  res.setHeader('Access-Control-Allow-Origin','*');
  
  res.end();
}).listen(8080);


