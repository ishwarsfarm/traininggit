var express = require('express');
var router = express.Router();

router.use(function before(req,res,next){
    console.log("Inside Books route");
    next();
  });

  router.get('/:id/',function(req, res) {
    res.send('Get a random book');
  });

  router.post('/:id/add',function(req, res) {
    res.send('Add a book');
  });

  router.put('/:id/update',function(req, res) {
    res.send('Update the book');
  });


  module.exports = router;