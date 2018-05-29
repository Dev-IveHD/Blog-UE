var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var express = require('express');
var exphbs = require('express-handlebars');
var mongoose = require('mongoose');
var app = express();
var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();
app.locals.globalCat = [{catname:"abc",catlink:"def"},{catname:"a b b c",link:"abcd"},{catname:"ghi",catlink:"fhjgsd"}];
var kontaktRouter = require('./routes/kontakt');
var addauthorRouter = require('./routes/addauthor');
var categoriesRouter = require('./routes/categories');


app.engine('hbs', exphbs({
  defaultLayout: 'layout',
  extname: 'hbs',
  layoutsDir: './views/layouts/'
}));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'hbs');

var postSchema = new Schema({
  public: Boolean,
  title: String,
  content: String,
  author: ObjectId,
  date: {
    type: Date,
    default: Date.now
  },
  category: ObjectId,
})
app.set('view engine', 'hbs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/kontakt', kontaktRouter);
app.use('/addauthor', addauthorRouter);
app.use('/categories', categoriesRouter);
app.use('/testsubmit', addauthorRouter);
app.use('/categories/:category', categoriesRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

function handleError(err) {
  console.log(err);
}
module.exports = app;

module.exports = app;
