#!/usr/bin/node

const cp = require('child_process');

console.log('I am parent process. Pid:',process.pid);

var cmd = cp.spawn('./02-child.js',{detached:true,stdio:['ignore',1,2]});

//cmd.stdout.pipe(process.stdout);

global.setTimeout(()=>{
  console.log('I am parent,goodbye!');
  process.exit();
},6000);

