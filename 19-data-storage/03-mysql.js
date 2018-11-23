#!/usr/bin/node

const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123wy123wy',
  database: 'test'
});

con.connect();

// operate db
/* 查询
const sql = 'select * from books where book_id=?';
con.query(sql,[2],function(err,result){
  if(err){
    console.error(err);
    process.exit(100);
  }
  console.log(result);
});
*/
/* 插入
const sql = 'insert into books(book_id,title,status) values(?,?,?)';
con.query(sql,[3,'Node.js',0],function(err,result){
  if(err){
    console.error(err);
    process.exit(100);
  }
  console.log(result);
});
*/
/* 修改
const sql = 'update books set book_id=? where title=?';
con.query(sql,[1,'Node.js'],function(err,result){
  if(err){
    console.error(err);
    process.exit(100);
  }
  console.log(result);
});
*/
const sql = 'delete from books where book_id=?';
con.query(sql,[1],function(err,result){
  if(err){
    console.error(err);
    process.exit(100);
  }
  console.log(result);
});


con.end();

