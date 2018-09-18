#!/usr/bin/node

var me = {};
var i = 0;

var msg = ['name','email','qq','mobile'];
var log = console.log;

log(msg[i++]+':');

process.stdin.on('data',(data)=>{

//log(data);

  eval('me.'+ msg[i-1] +' = "'+ data.slice(0, data.length-1)+'"');
  if(i<4){
    log(msg[i++] + ':');
  }
  else{
    log(me);
    process.exit();
  }
})

//process.stdin.on('data',(data)=>{
//log(data);
  //log(data.slice(0,data.length-1).toString('utf8'));
//})

process.stdin.on('end',()=>{
  log(me);
})
