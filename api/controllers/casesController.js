const express = require('express');
var Cases = require('../models/Cases');

exports.addCase = function(req, res){
    Cases.create(req.body, function (err, cases) {
      if (err) return next(err);
      res.json(cases);
  });
}
exports.getAllCase = function(req, res){
    Cases.find(function (err, cases){
        if(err){
          console.log(err);
        }
        else {
          res.json(cases);
        }
      });
}
exports.getEditCase = function(req, res){
  var id = req.params.id;
  Cases.findById(id, function (err, Case){
      res.json(Case);
  });
}
exports.updateCoin = function(req, res){
  Cases.findById(req.params.id, req.body, 
    function (err, cases) {
    if (err) return next(err);
    res.json(cases);
});
}


exports.deleteCoin = function(req, res){
  Cases.findByIdAndRemove({_id: req.params.id}, function (err, cases) {
    if (err) return next(err);
    res.json(cases);
});
}

// exports.searchCoin = function(req, res){
//   const searchField = req.query.name;
//   Coin.find({name: {$regex: searchField, $options: '$i'}})
//   .then(data => {
//     res.send(data);
//   })
//   .catch(err =>{
//     res.send(err)
//   })
// }
exports.dailySatus = function(req, res, next){
  Cases.aggregate([
    {
        $match: { status: req.params.status }
    },
    {
        $group: { 
            _id: {
                date: {
                    $dateToString: {
                        format: "%Y-%m-%d", 
                        date: "$updated"
                    }
                }
            }, 
            count: {
                $sum: 1
            }
        }
    },
    { $sort: {_id: 1} }
], function (err, cases) {
    if (err) return next(err);
    res.json(cases);
});

}

