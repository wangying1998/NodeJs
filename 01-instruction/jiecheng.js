#!/usr/bin/node

function fun(){
  var sum = 1;
  for(var i=10;i>0;i--){
    sum *= i;
  }
  return sum;
}
console.log("10的阶乘是"+fun());
