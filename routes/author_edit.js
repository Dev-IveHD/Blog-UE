var express = require('express');
var router = express.Router();
var app = express();
var db = require('../database.js')

router.post('/', function (req, res, next) {
  db.Author.findById(req.body.id,function(err,author){
    if (err) return handleError(err);

    author.Surname = req.body.surname;
    author.Name = req.body.name;
    author.save(function(err,updatedAuthor){
      if(err) return handleError(err);
      res.redirect('/editauthor')
    })
  })
});

module.exports = router;