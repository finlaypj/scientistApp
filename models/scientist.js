var mongoose = require('mongoose');

//scientist schema

var Schema = mongoose.Schema


var scientistSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  DofB:{
    type: String,
    required: true
  },
  DofD:{
    type: String
  },
  description:{
    type: String
  },
  honours:
    [
      {type: String}
    ]
  ,
  img_url:{
    type:String
  },
  create_date:{
    type: Date,
    default: Date.now

  }
});

var scientist = module.exports = mongoose.model('scientist' , scientistSchema);

//get scientists

module.exports.getScientists = function(callback , limit){
  Scientist.find(callback).limit(limit);
}

//get a single scientist

module.exports.getScientistById = function(_id , callback){
  Scientist.findById(_id, callback);
}

module.exports.addScientist = function(_scientist , callback){
  Scientist.create(_scientist, callback);
}

module.exports.updateScientist = function(id , scientist , callback){
  var query = {_id:id};
  var update = {
    name: scientist.name,
    DofB: scientist.DofB,
    DofD: scientist.DofD,
    description: scientist.description,
    honours: scientist.honours,
    img_url: scientist.img_url
  }

  Scientist.findOneAndUpdate(query, update, options, callback);
}

module.exports.deleteScientist = function(id , callback){
  var query = {_id:id};
  Scientist.remove(query , callback);
}
