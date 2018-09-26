#!/usr/bin/node

function Dog(name,energy){
  var _name = name;
  var _energy = energy;

  var _listeners = {};

  var timer = global.setInterval(()=>{
    if(_energy > 0){
      emit('bark');
      _energy--;
    }
    else{
      global.clearInterval(timer);
    }
  },500);

  this.name = ()=> _name;
  this.energy = () => _energy;

  function emit(e, arg){
    _listeners[e].forEach((fn)=>{
      fn.call(this,arg);
    })
  }

  this.on = (e,fn)=>{
    if(typeof(_listeners[e])==='undefined'){
      _listeners[e] = [];
    }
      _listeners[e].push(fn);
      console.log(_listeners);
  }
}


module.exports = Dog;


