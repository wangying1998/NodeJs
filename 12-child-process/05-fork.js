#!/usr/bin/node

const cp = require('child_process');

console.log('I am parent process. PID:',process.pid);

cp.fork('./02-child.js');

global.setTimeout(()=>{
  console.log('I am parent process,goodbye!');
  process.exit();
},6000);

