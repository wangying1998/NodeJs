#!/usr/bin/node

console.log('file name:',__filename);
console.log('dir name:',__dirname);

//获取/view/data.html的绝对路径
var file = __dirname + '/view/data.html';

//考虑跨平台
/*
switch(process.platform){
  case 'linux':
       file = __dirname + '/view/data.html';
       break;
  case 'window':
       file = __dirname + '\\view\\data.html';
       break;
  default:
       file = 'error';
}
*/

//使用普通模块path
var path = require('path');
file = path.join(__dirname,'view','data.html');

console.log('data file:' + file);



