#!/usr/bin/node

const fs = require('fs');

var file = process.argv[2] || __filename;

var src = fs.createReadStream(file);

src.on('error',(err)=>{
  console.log(err.message);
  process.exit(1);
});
// 箭头函数的this指向全局
src.on('open',function(){
  this.pipe(process.stdout);
});

