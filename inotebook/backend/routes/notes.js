const express = require('express');
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Notes  = require("../models/Notes");


router.get('/fetchallnotes' , fetchuser,async (req , res)=>{
    const notes = await Notes.find({user:req.user})
res.json(notes)
})



module.exports= router