const mongoose = require('mongoose');

const mongoURI = 'mongodb://127.0.0.1:27017/inotebook';


const  connectToMongoose = ()=>{
   mongoose.connect(mongoURI ,{ useNewUrlParser : true})
}

module.exports= connectToMongoose;