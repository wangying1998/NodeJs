const express = require('express');
const app = express();

app.get('/',(req,res)=>{
  res.send('Hello World!');
});

function c1(req,res,next){
  console.log('c1');
  next();
}
function c2(req,res,next){
  console.log('c2');
  next();
}

app.get('/abc',[c1,c2],(req,res,next)=>{
  console.log('abc!');
  next();
},
(req,res)=>{
  console.log('def!');
  res.send('OK!');
});

app.listen(8080);
