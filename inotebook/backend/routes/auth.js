const express = require('express');
const {body , validationResult } = require('express-validator');
const router = express.Router();
const User = require('../models/user');


// Create a User using post "api/auth/createUser"  No login required
router.post('/', [
    body('name','Enter the valid name').isLength({min:3}),
    body('email','Enter the valid Email').isEmail(),
    body('password').isLength({min:5}),

], async (req,res)=>{
  // If there are errors , return bad error  
   const errors = validationResult(req);
   if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
   }
   // Check wether the user is already exist with the already existing email

   let user = User.findOne({email:req.body.email});
   if(user){
      return req.status(400).json({error : "Sorry a user with the email is already exixted"})
   }
    user = await User.create({
    name : req.body.name,
    password : req.body.password,
    email : req.body.email
   })
   
   
  //  .then(user => res.json(user))
  //  .catch(err =>{ console.log(err)
  //    res.json("Please enter the unique email")});
  
})


module.exports= router