var express = require('express');
var app = express();

var port = 3000;


app.get('/', function(req,res){
	res.send('<h1>hello anh nguyen quang trung</h1>');
});
app.listen(port,function(){
	console.log('example on port'+port);
});