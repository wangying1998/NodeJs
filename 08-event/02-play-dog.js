#!/usr/bin/node

const Dog = require('./03-dog.js');
var taidi = new Dog('taidi',5);
var jinmao = new Dog('jinmao',8);

taidi.on('bark',onbark.bind(taidi));
//taidi.on('bark',onb.bind(taidi));
jinmao.on('bark',onbark.bind(jinmao));

function onbark(){
  console.log('%s is barking,energy is %d',this.name(),this.energy());
}
//function onb(){
//  console.log('taidi');
//}

