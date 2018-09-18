#!/usr/bin/node

console.log('start...');
/*//时间控制
function loop(){
  console.log('I will loop');
}
var timeId = global.setInterval(loop,500);
global.setTimeout(()=>{
  console.log('end');
  global.clearInterval(timeId);
},3000);
*/


//次数控制
var count = 0;
function loop(){
  console.log('I will loop');
  count++;
  if(count === 10){
    global.clearInterval(time);
    console.log('end');
  }
}
var time = global.setInterval(loop,500);



