#!/usr/bin/node

var code = process.argv[2];
if(process.argv.length < 3){

  console.error('请给出命令行参数！');
  process.exit(1);
}

if(isNaN(Number(code))){
  console.error('命令行参数类型应该是数值类型！');
  console.log(typeof code);
  process.exit(0);
}

process.exit(code);
