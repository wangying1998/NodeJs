#!/usr/bin/node

log = console.log;
var buf1 = new Buffer(256);
buf1[0]=0;
log('buf1 length:',buf1.length);
log('buf1:',buf1);

for(var i=0;i<256;i++){
  buf1[i] = i;
}
log('buf1:',buf1);

var buf2 = buf1.slice(246,256);
log('buf2:',buf2);
log('buf2 length:',buf2.length);

buf2.fill(0);
log('buf2:',buf2);

var arr = ['a',1,2,0xBA,0xCF];
var buf3 = new Buffer(arr);
log('buf3:',buf3);
log('buf3 length:',buf3.length);

var buf4 = new Buffer('hello world','utf8');
log('buf4:',buf4);
log('buf4 length:',buf4.length);
log('buf4 string:',buf4.toString('utf8'));

buf4.copy(buf3,'utf8');
log('buf3:',buf3.toString('utf8'));


