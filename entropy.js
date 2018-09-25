#!/usr/bin/node

var arr = [];
for(var i=2;i<process.argv.length;i++){
  if(process.argv[i]>1 || process.argv[i]<0){
    console.error('参数'+ (i-1) +'必须在0~1之间！');
  }
  arr[i-2] = process.argv[i];
}
var H(p) = 0;
for(var i=0;i<arr.length;i++){

}







