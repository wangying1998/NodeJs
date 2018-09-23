#!/usr/bin/node

var str = process.argv[2];

if(process.argv.length !== 3){
  console.log('命令行参数不正确！');
  process.exit(1);
}

var buf = new Buffer(str,'base64');
var data = buf.toString('utf8').split(':');

console.log('usr:%s\npassword:%s',data[0],data[1]);

