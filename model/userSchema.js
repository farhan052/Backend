const mongoose =require('mongoose');
const userSchema = new mongoose.Schema({
    refer :{
        type:String,
        
    },
   
    username :{
        type:String,
        
    },
    password :{
        type:String,
        
    },
    remember :{
        type: String
    }
   
})
const User = mongoose.model('User', userSchema);
module.exports =User;