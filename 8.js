var express = require('express');
var app = express();
var fs = require('fs');
app.get('/books', function(req,res){
  fs.readFile(process.argv[3], function (err, data) {
    if (err) {
      throw err;
    }
    object = JSON.parse(data);
    res.send(object);
  });
})
app.listen(process.argv[2])
