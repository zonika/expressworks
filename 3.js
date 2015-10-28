var express = require('express');
var app = express();
var path = process.argv[3];
app.set('views', __dirname+'/templates');
app.set('view engine', 'jade');
app.get('/home', function(req, res) {
  res.render('index', {date: new Date().toDateString()});
})
app.listen(process.argv[2]);
