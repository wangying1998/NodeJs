#!/usr/bin/node

console.log('I am child process. PID:',process.pid);

process.send('Child process starts! PID:'+process.pid);

process.on('message',(msg)=>{
  console.log('message from parent:',msg);
});

