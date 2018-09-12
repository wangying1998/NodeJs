#!/usr/bin/node

var length = process.argv.length;
for(var i=0;i<length;i++){
  console.log(i,process.argv[i]);
}

var arg = process.argv[2];
function calc(){
  console.log(arg + '=' + eval(arg));
}
calc();

