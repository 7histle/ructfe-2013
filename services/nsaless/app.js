#!/usr/bin/node

var express = require('express');
var routes = require('./routes');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(routes.getUser);

app.get('/', routes.index);
app.get('/signin', routes.signin);
app.get('/signup', routes.signup);
app.post('/tweet', routes.tweet);
app.post('/checkpub', routes.checkpub);

app.get('/retweet/:id', routes.retweet);
app.get('/:id', routes.home)

app.listen(3000, function(){
  console.log('listening 0.0.0.0:3000');
});
