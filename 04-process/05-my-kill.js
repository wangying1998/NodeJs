#!/usr/bin/node

var pid = process.argv[2],sig = process.argv[3];

if(process.argv.length !== 4){
  console.error('缺少参数!');
}
if(isNaN(Number(pid))){
  console.error('参数1应是数字类型!');
}

process.kill(pid,sig);

