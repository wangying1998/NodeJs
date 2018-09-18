#!/usr/bin/node

var log = console.log;

log('process pid:',process.pid);

process.stdin.resume();

process.on('SIGINT',()=>{
  log('you pressed Ctrl+C');
  process.exit();
});

process.on("SIGTSTP",()=>{
  log("you pressed Ctrl+Z");
});
