var TodoList = require('../models/todo.js');
var express = require('express');
var router = express.Router();

var todo = new TodoList();
/* GET home page. */
router.get('/', function(req, res , next) {
  var items = [];
  todo.getAll(function(err,items){
    if(err){
      res.status(500).send('DB Error!');
      return;
    }
    res.render('index', { items: items });
  });
  
});
router.post('/',(req,res)=>{
  todo.addItem(req.body.item,function(err){
    if(err){
      res.status(500).send('DB Error!');
      return;
    }
    todo.getAll(function(err,items){
      res.render('index',{items:items});
    });
  });
});


module.exports = router;
