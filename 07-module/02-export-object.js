#!/usr/bin/node

var circle = {
  diameter:function(r){
    return 2 * r;
  },
  circumfrence:function(r){
    return 2 * Math.PI * r;
  },
  area:function(r){
    return Math.PI * r * r;
  }
}

module.exports = circle;
