const express = require('express');
const {body , validationResult } = require('express-validator');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const { Await } = require('react-router-dom');
const jwt = require('jsonwebtoken');
JWT_sec  = "Rounanakkis$loundak";

// Create a User using post "api/auth/createUser"  No login required
router.post('/creatuser', [
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
  try{
    let user = await User.findOne({email:req.body.email});
   if(user){
      return req.status(400).json({error : "Sorry a user with the email is already exixted"})
   }
   const salt =await bcrypt.genSalt(10);
   const secPass =await bcrypt.hash(req.body.password , salt);
   // Creater a new user 
    user = await User.create({
    name : req.body.name,
    password : secPass,
    email : req.body.email
   })
const data = {
   user: {
      id : user.id
   }
}
   const authToken= jwt.sign( data ,JWT_sec );
    res.json({authToken});
  } catch(error){
     console.error(error.message);
     res.status(500).send("Some error occured");
  }
   
})


module.exports= router