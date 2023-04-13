import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
    title:{
        type : String,
        require : ture,
       
    },
    description :{
        type : String,
        require : ture
    },
    email :{
        type : String,
        require : ture,
        unique:true
    },
    tag : {
        type : String
    },
    
    date : {
        type : Date,
        default : Date.now
    }

});


module.exports = mongoose.exports('user', NoteSchema);