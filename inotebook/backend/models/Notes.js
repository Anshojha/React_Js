const mongoose = require('mongoose');
    const { Schema } = mongoose;
    const UserSchema = new Schema({
        title:{
            type : String,
            require : true
        },
        description :{
            type : String
        },
        email :{
            type : String,
            unique:true
        },
        password: {
            type : String
        },
        
        date : {
            type : Date,
            default : Date.now
        }

    });


module.exports = mongoose.model('user', UserSchema);