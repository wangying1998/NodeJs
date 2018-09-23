#!/usr/bin/node

var usr = process.argv[2];
    pwd = process.argv[3];

if(process.argv.length !== 4){
    console.error('命令行参数不正确！');
    process.exit(1);
}

console.log('usr:%s\npwd:%s',usr,pwd);

var str = usr + ':' + pwd;
var buf = new Buffer(str);
console.log(buf.toString('base64'));


