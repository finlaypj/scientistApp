var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
Scientist = require('./models/scientist')

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/people');
var db = mongoose.connection;

app.get('/' ,  function(req, res){
  res.send("<h1>Hello Worlds!<h1>")
});

app.get('/api/scientists' , function(req,res){

  Scientist.getScientists(function(err, scientists){
    if(err){
      throw err;
    }
    res.json(scientists);
  })

})

app.post('/api/scientists' , function(req,res){
  var scientist = req.body;
  Scientist.addScientist(scientist , function(err, scientist){
    if(err){
      throw err;
    }
    else{
      res.json(scientist);
    }
  })
})

app.put('/api/scientists/:_id', function(req, res){
  var id = req.params._id;
  var scientist = req.body;
  Scientist.updateScientist(id, scientist , function(err , scientist){
    if(err){
      throw err;
    }
    res.json(scientist);

    });
})


app.get('/api/scientists/:_id', function(req, res){
  Scientist.getScientistById(req.params._id , function(err, scientist){
    if(err){
      throw err;
    }
    else {
      res.json(scientist);
    }
  })
})

app.delete('/api/scientist/:_id', function(req , res){
  Scientist.deleteScientist(req.params._id , function(err , scientist){
    if(err){
      throw err;
    }
    else {
      res.json(scientist);
    }
  })
})

app.listen(3000);
console.log("Listening on 3000 ... ");
