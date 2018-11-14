var express = require('express');
var router = express.Router();

var items = [];

/* GET home page. */
router.get('/', function(req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Content-Type', 'text/plain; charset="utf-8"');
  res.status(200).json(items);
});

router.post('/',function(req,res){
  if(req.body.item){
    items.push(req.body.item);
  }
  res.header('Access-Control-Allow-Origin', '*');
  res.status(200).send('OK!');
});

router.put('/',function(req,res){
  res.header('Access-Control-Allow-Origin', '*');
  if(typeof req.query.id === 'undefined'){
    res.status(404).send('NOT FOUND!');
  }
  else{
    var id = req.query.id;
  }
  if(id>0 && id<items.length){
    items[id]=req.body.item;
    res.status(200).send('Update Ok!');
  }
  else{
    res.status(404).send('NOT FOUND!');
  }
});

router.delete('/',function(req,res){
  res.header('Access-Control-Allow-Origin', '*');
  if(typeof req.query.id === 'undefined'){
    items=[];
    res.status(200).send('Delete Ok!');
  }
  else{
    var id = req.query.id;
  }
  if(id>0 && id<items.length){
    items.splice(id,1);
    res.status(200).send('Delete Ok!');
  }
  else{
    res.status(404).send('NOT FOUND!');
  }
});

module.exports = router;
