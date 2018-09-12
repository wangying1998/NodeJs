#!/usr/bin/node

var log = console.log;
//打印架构信息
log('arch:',process.arch);
//平台信息
log('plantform:',process.platform);
//进程id
log('pid:',process.pid);
//可执行文件的绝对路径
log('execPath:',process.execPath);
//在脚本中增加标准输入流的读取操作,使程序暂停执行
//process.stdin.resume();

//打印node版本
log('node version',process.version);
//打印当前用户id
log('uid:',process.getuid());
//打印当前用户所属组id
log('gid:',process.getgid());
//当前工作目录
log('cwd:',process.cwd());
//打印内存使用情况
log('rss:',process.memoryUsage().rss);
//对外内存 external
log('external:%s\n',process.memoryUsage().external);
  //heapTotal
  log('heapTotal:',process.memoryUsage());
  //heapUsed
  log('heapUsed:',process.memoryUsage());
//打印环境变量
log('env:',process.env);
//登录名
log('LOGNAME:',process.env.LOGNAME);

