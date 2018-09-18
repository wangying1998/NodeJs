#!/usr/bin/node

function Bomb(){
  this.message = "Bomb!"
}

Bomb.prototype.explode = function(){
  console.log(this);
  console.log(this.message);
}

var b = new Bomb();

var timeId = global.setTimeout(b.explode.bind(b),500);

//global.clearTimeout(timeId);

