const express = require('express');
const Coin = require('../models/Coin');

exports.addCoin = function(req, res){
    var coin = new Coin(req.body);
   coin.save()
    .then(item => {
    res.status(200).json({'coin': 'Coin added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });

}
exports.getAllCoin = function(req, res){
    Coin.find(function (err, coins){
        if(err){
          console.log(err);
        }
        else {
          res.json(coins);
        }
      });
}
exports.getEditCoin = function(req, res){
    var id = req.params.id;
  Coin.findById(id, function (err, coin){
      res.json(coin);
  });
}
exports.updateCoin = function(req, res){
    Coin.findById(req.params.id, function(err, coin) {
        if (!coin)
          return next(new Error('Could not load Document'));
        else {
          coin.name = req.body.name;
          coin.price = req.body.price;

          coin.save().then(coin => {
              res.json('Update complete');
          })
          .catch(err => {
                res.status(400).send("unable to update the database");
          });
        }
      });
}


exports.deleteCoin = function(req, res){
    Coin.findByIdAndRemove({_id: req.params.id}, function(err, coin){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
}
