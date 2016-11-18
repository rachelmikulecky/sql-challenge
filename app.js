var express = require('express');
var app = express();
var bodyParser = require('body-parser');
 var pgp = require('pg-promise')();
 var db = pgp('postgres://postgres:1@localhost:5432/blog');
// this is to serve the css and js from the public folder to your app
// it's a little magical, but essentially you put files in there and link
// to them in you head of your files with css/styles.css
app.use(express.static(__dirname + '/public'));
// this is setting the template engine to use ejs
app.set('view engine', 'ejs');
// setting your view folder
app.set('views', __dirname+'/views');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// for your routes to know where to know if there is param _method DELETE
// it will change the req.method to DELETE and know where to go by setting
// your req.url path to the regular path without the parameters
app.use( function( req, res, next ) {
  if (req.query._method == 'DELETE') {
    req.method = 'DELETE';
    req.url = req.path;
  }
  next();
});
// gettting all the posts
app.get('/', function(req,res,next){
  db.any('SELECT * FROM posts')
    .then(function(data){
      return res.render('index', {data: data})
    })
    .catch(function(err){
      return next(err);
    });
});
// edit posts
app.get('/post/:id/edit', function(req,res,next){
  var id = parseInt(req.params.id);
  db.one('select * from posts where id = $1', id)
    .then(function (post) {
      res.render('edit', {post: post})
    })
    .catch(function (err) {
      return next(err);
    });
});
app.post('/post/:id/edit', function(req,res,next){
  console.log(req.body.title);
  db.none('update posts set title=$1, content=$2 where id=$3',
  [req.body.title, req.body.content, parseInt(req.params.id)])
    .then(function () {
      res.redirect('/');
    })
    .catch(function (err) {
      return next(err);
    });
});
app.get('/post/new', function(req,res,next){
  res.render('new');
});
app.get('/post/:id', function(req,res,next){
  var id = parseInt(req.params.id);
  db.one('select * from posts where id = $1', id)
    .then(function (post) {
      res.render('post', {post: post})
    })
    .catch(function (err) {
      return next(err);
    });
});
app.post('/post/new', function(req,res,next){
  db.none('insert into posts(title, content)' +
      'values(${title}, ${content})',
    req.body)
    .then(function () {
      res.redirect('/');
    })
    .catch(function (err){
      return next(err);
    });
});
app.delete('/post/:id', function(req, res, next){
  var id = parseInt(req.params.id);
  db.result('delete from posts where id = $1', id)
    .then(function (result) {
      res.redirect('/');
    })
    .catch(function (err) {
      return next(err);
    });
});
app.listen(3000, function(){
  console.log('Application running on localhost on port 3000');
});
