#!/usr/bin/node

// 控制台格式化输出信息

var user = {
  name:'wy',
  age:20,
  qq:1610010554
};

var log = console.log;

//占位符方式打印
log('name:%s',user.name);
log('age:%d',user.age);
log('user:%j',user);

//拼接方式
log('name:' + user.name);
log('age:' + user.age);

//模板字符串
log(`name: ${user.name}`);
log(`age: ${user.age}`);

