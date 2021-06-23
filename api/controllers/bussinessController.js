const express = require('express');
const Business = require('../models/Business');

exports.addBusiness = function(req, res){
  let business = new Business(req.body)
  bussiness.save()
  .then(business =>{
    res.status(200).json({'business': 'business in added successfully'});
    })
    .catch(err =>{
      res.status(400).send('Unable to create bussiness')
    })
}

exports.allBusiness = function(req, res){
  Business.find(function(err, businesses){
    if(err){
      console.log(err)
    } else {
      res.json(businesses)
    }
  })
}


exports.editBusiness = function(req, res){
  Business.findById(req.params.id, function(err, business){
    if(err){
      console.log(err)
    } else {
      res.json(business)
    }
  })
}

exports.updateBusiness = function(req, res){
  Business.findById(req.params.id, function(err, business){
    if (!business){
      return next(new Error('Could not load Document'));
    }else {
      business.person_name = req.body.person_name;
        business.business_name = req.body.business_name;
        business.business_gst_number = req.body.business_gst_number;
        business.save()
        .then(business =>{
          res.json('Business Updated')
        })
        .catch( err=>{
          res.status(400).send('unable to Business update ')
        })
    }
  })
}



exports.deleteBusiness = function(req, res){
  Business.findByIdAndRemove({_id: req.params.id}, function(err, business){
    if(err){
      console.log(err)
    } else {
      res.json('Business removed success')
    }
  })
}
