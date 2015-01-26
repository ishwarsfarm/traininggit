var express = require('express');
var router = express.Router();

router.use(function before(req,res,next){
    console.log("Inside Books route");
    next();
  });

  router.get(function(req, res) {
    res.send('Get a random book');
  });

  router.post(function(req, res) {
    res.send('Add a book');
  });

  router.put(function(req, res) {
    res.send('Update the book');
  });


  module.exports = router;