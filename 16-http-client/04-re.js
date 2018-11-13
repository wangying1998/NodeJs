#!/usr/bin/node

const http = require('http'),log = console.log;

const addr = 'http://www.sian.com/';

function getURL(addr){
  http.get(addr,(res)=>{
    log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
    log(res.headers);
    log('');
    if(res.statusCode > 300 && res.statusCode < 400){
      var newAddr = res.headers['location'];
      log(newAddr);
      getURL(newAddr);
    }
    else{
      res.pipe(process.stdout);
    }
  });
}

getURL(addr);
