    import mongoose from 'mongoose';
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
        tag : {
            type : String
        },
        
        date : {
            type : Date,
            default : Date.now
        }

    });


    module.exports = mongoose.exports('User', NoteSchema);