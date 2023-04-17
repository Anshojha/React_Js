const express = require('express');
const {body , validationResult } = require('express-validator');
const router = express.Router();
const User = require('../models/user');


router.post('/', [
    body('name','Enter the valid name').isLength({min:3}),
    body('email','Enter the valid Email').isEmail(),
    body('password').isLength({min:5}),

],(req,res)=>{
   const errors = validationResult(req);
   if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
   }
   User.create({
    name : req.body.name,
    password : req.body.password,
    email : req.body.email
   }).then(user => res.json(user))
   .catch(err =>{ console.log(err)
     res.json("Please enter the unique email")});
  
})

module.exports= router