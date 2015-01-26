var express = require('express');

var app = express();

var birds = require('./routes/birds.js');
//var books = require('./routes/books.js');
var users = require('./routes/users.js');


app.get('/',function(req,res){
    res.send("Welcome ishwar! Express is working fine.");
});

app.use('/user',users);
app.use('/birds',birds);

//app.use('/books',books);

var server = app.listen(3000,function(){
 var address = server.address().address;
 var port = server.address().port;

 console.log("Express is running on ",address," @ port "+port);
});