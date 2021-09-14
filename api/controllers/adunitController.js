const express = require('express');
const AdUnit = require('../models/AdUnit');

exports.addAds = function(req, res){
  let adunit = new AdUnit(req.body);
  adunit.save()
  .then(game =>{
    res.status(200).json({'adUnit': 'AdUnit is added successfuly'})

    })
    .catch(err =>{
      res.status(400).send("unable to save to database");
  })
}

exports.getAllAds = function(req, res){
  AdUnit.find(function (err, adUnits){
    if(err){
      console.log(err);
    }
    else {
      res.json(adUnits);
    }
  });
};

exports.getEditAds = function(req, res){
  let id = req.params.id;
  AdUnit.findById(id, function (err, adUnit){
      res.json(adUnit);
  });
};

exports.updateAds = function(req, res){
  AdUnit.findById(req.params.id, function(err, adUnit) {
    if (!adUnit)
      return next(new Error('Could not load Document'));
    else {
        adUnit.unit_name = req.body.unit_name;
        adUnit.unit_price = req.body.unit_price;

        adUnit.save().then(adUnit => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
};


exports.deleteAds = function(req, res){
  AdUnit.findByIdAndRemove({_id: req.params.id}, function(err, adUnit){
    if(err) res.json(err);
    else res.json('Successfully removed');
});
};

