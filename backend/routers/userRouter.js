const express = require('express');
const { model } = require('mongoose');
const router = express.Router();
const Model = require('../models/userModel');

// Response Codes
// 200 - Successfull
// 400- client side error
// 500-server side error
router.post('/add',(req,res) => {
    console.log(req.body);


    //asynchronous functions

    new Model(req.body).save()
    .then((result) => {
        console.log(result);
        res.json(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err);  
    });
})
router.get('/getall',(req,res) => {

    Model.find({})
    .then((result) => {
        res.json(result);
        }).catch((err) => {
         res.json(err)
        
    });
   
})
 router.get('/getbyemail/:email',(req,res) =>{
        console.log(req.params.email);
        Model.findOne({email : req.params.email})
    .then((result) => {
       
        res.json(result);
        }).catch((err) => {
            
            res.json(err);
         });
    })
    router.delete('/delete/:id',(req,res) =>{
        Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            res.json(err)
        });
    })
module.exports = router ;