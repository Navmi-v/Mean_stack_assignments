var express = require('express');
var router = express.Router();
var Inventory = require('./inventory.js');
//stores route handlers

//get the list of items from database
router.get('/inventory', function(req,res,next){
    Inventory.find({}).then(function(inventories){
        res.send(inventories);
    });
});

//add a new item to database
router.post('/inventory', function(req,res,next){
    // var inventory = new inventory(req.body);
    // inventory.save();
    Inventory.create(req.body).then(function(inventory){
          res.send(inventory);
    }).catch(next);

});

//update an item in the database
router.put('/inventory', function(req,res,next){
    res.send({type: 'PUT'});
});
router.put('/inventory/:itemname', function(req,res,next){
    Inventory.findOneAndUpdate({ name: { $eq: req.params.itemname}}, req.body).then(function(inventory){
        res.send(inventory);
    });
});

//delete an item from a database
router.delete('/inventory', function(req,res,next){
    res.send({type: 'DELETE'});
});
router.delete('/inventory/:itemname', function(req,res,next){
    Inventory.findOneAndRemove({ name: { $eq: req.params.itemname}}).then(function(){
        Inventory.findOne({ name: { $eq: req.params.itemname}}).then(function(inventory){
        res.send(inventory);
        });
    });
});

module.exports = router;