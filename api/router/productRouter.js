const express = require('express');
const app = express();
const productRoutes = express.Router();

let Product = require('../models/Product');

productRoutes.route('/add').post(function(req, res){
let product = Product(req.body);
product.save().then(product=>{
    res.status(200).json({'Product':'Product Added Successfully'});
  })
  .catch(err=>{
      res.status(400).send('Product unable to save in DB')
    });
});

productRoutes.route('/').get(function(req, res){
  Product.find(function(err, products){
      if(err){
        console.log(err);
      }
      else{
        res.json(products)
      }
    })
  })

  productRoutes.route('/edit/:id').get(function(req, res){
    Product.findById(req.params.id, function(err, product){
      res.json(product)
    })
  })
  //  Defined update route
productRoutes.route('/update/:id').post(function (req, res) {
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
});



  productRoutes.route('/delete/:id').get(function (req, res) {
    Product.findByIdAndRemove({_id: req.params.id}, function(err, product){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = productRoutes;