#!/usr/bin/node

//function fun(radius){
//  return {
//    diameter:function(){ return 2 * radius; },
//    circumference:function(){ return 2 * Math.PI * radius; },
//    area:function(){ return Math.PI * radius * radius; }
//  };
//}
//module.exports = fun;


module.exports = {
  diameter:function(r){ return 2 * r; },
  circumference:function(r){ return 2 * Math.PI * r; },
  area:function(r){ return Math.PI * r * r; }
}

console.log(module);

