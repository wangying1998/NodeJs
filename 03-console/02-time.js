#!/usr/bin/node

function fun(){
  var res;
  for(var i=0;i<1000;i++){
    for(var j=0;j<1000;j++){
      res = i*j;
    }
  }
  return res;
}

console.time('test');
fun();
console.timeEnd('test')


