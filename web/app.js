var express = require('express');
var path = require('path');
var ejs = require('ejs');

var app = express();
var routes = require('./routes');

app.set('views', './views')
app.engine('html', ejs.renderFile);
app.set('view engine', "jade");


app.use(express.static(__dirname+'/public/'));


app.get('/', routes.index);


app.listen(3000, function () {
	console.log("http://127.0.0.1:3000");
});