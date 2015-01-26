var express = require('express');
var router = express.Router();

	router.use(function before(req,res,next){
		console.log("Inside Users route");
		next();
	});

	router.get('/',function(req,res){
    	res.send("Executed get successfully !");
	});

	router.post('/add',function(req,res,next){
    	res.send("Executed post successfully !");
	});

	router.put('/update',function(req,res){
	    res.send("Executed put successfully !");	    
	});

	router.delete('/delete',function(req,res){
	    res.send("Executed delete successfully !");
	});

	module.exports = router;