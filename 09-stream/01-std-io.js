#!/usr/bin/node

process.stdin.resume();
process.stdin.setEncoding('utf8');

//process.stdin.on('data',(data)=>{
  //process.stdout.write(data.toUpperCase());
//});

process.stdin.push('hello world!');
process.stdin.push(null);
process.stdin.pipe(process.stdout);

process.stdin.on('end',()=>{
  process.exit();
})

