const express = require('express');
const Product = require('../models/Product');

exports.addProject = function(req, res){
  let product = new Product(req.body)
  product.save().then(product=>{
    res.status(200).json({'Product':'Product Added Successfully'});
  })
  .catch(err=>{
    res.status(400).send('Product unable to save in db')
  })
}

exports.allProject = function(req, res){
  Product.find(function(err, products){
    if(err){
      console.log(err)
    } else {
      res.json(products)
    }
  })
}

exports.editProduct = function(req, res){
  Product.findById(req.params.id, function(err, product){
      if(err){
        console.log(err);
      }
      else{
        res.json(product)
      }
    })
  }
// exports.editProduct = function(req, res){
//   let id = req.params.id;
//   Product.findById(id, function(err, product){
//     if(err){
//       console.log(err)
//     } else {
//       res.json(product)
//     }
//   })
// }

exports.updateProject = function(req, res){
  Product.findById(req.params.id, function(err, product) {
    if (!product)
      res.status(404).send("Record not found");
    else {
      product.ProductName = req.body.ProductName;
      product.ProductDescription = req.body.ProductDescription;
      product.ProductPrice = req.body.ProductPrice;
      product.StartDate = req.body.StartDate;
      product.EndDate = req.body.EndDate;
      product.Status = req.body.Status;

      product.save().then(product => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
}

exports.deleteProduct = function(req, res){
    Product.findByIdAndRemove({_id: req.params.id}, function(err, product){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
}
