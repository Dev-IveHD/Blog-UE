var express = require('express');
var app = express();
var router = express.Router();
var db = require('../database.js');




/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('addauthor',{title:"Autor hinzufügen"});
});
module.exports = router;
