var express = require('express');
var router = express.Router();
var db = require('../database.js');
var mongoose = require('mongoose');
var array = mongoose.Types.Array;
var post = [];

console.log(db.Category.findOne);
for(var i=1;i<=10;i++) {
    post.push({
        title: "Titel " + i,
        date: new Date(i),
        author: "Autor "+i,
        content: "lorem ipsum"
    })
}

/*router.get('/food', function(req, res, next){
var category = mongoose.model('Category', )
router.get('/food', function(req, res, next){
    res.render('food')
});
    mongoose.categorySchema.findOne({ caturl: ca
rou
    mongoose.categorySchema.findOne({ caturl: caget('/travel', function(req, res, next){
   
    mongoose.categorySchema.findOne({ caturl: ca.render('travel')
});
    mongoose.categorySchema.findOne({ caturl: ca
router.get('/fashion', function(req, res, next){
    res.render('fashion')
});*/
/*router.get('/', function(req, res, next){
    res.render('categories',{post:post,title:"Kategorie"})
});*/

router.all('/:category', function(req, res, next) {
    var category = req.params.category;
    findCategoryByLink(category, function(error,category){
        if(error) return next(error);
        console.log(error);
        res.render('categories',category);
    })
})
var findCategoryByLink = function(categorylink,callback) {
    console.log(categorylink);
    //var cat = mongoose.model('Category', category);
    db.Category.findOne({ caturl: categorylink }, function (err, category) {
        callback(null, category);
    });
};
module.exports = router;
