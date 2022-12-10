const mongoose = require('mongoose')
const validator = require('validator'); 

const valid= (id) =>{
    return id.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/) ? true : false;
   }

const userSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now()
    },
    email:{
        type:String,
        required:true,
        validate: [ validator.isEmail, 'invalid email']
    },
    phoneNumber:{
        type:String,
        validate:[ validator.isMobilePhone, 'invalid number']
    },
    name: {
        type: String,
        required: [true, 'name must be provided'],
    },
    username : {
        type: String,
        required: [true, 'Username must be provided'],
    },
    bio: {
        type: String,
        max: 45,
    },
    accountPrivacy: {
        type: Boolean,
        default: false,
    },
    password:{
        type:String,
        min:8,
        max:15,
        required:true,
        validate:[ valid, 'Password must contain one upper character, one lower character and a number. Max length 15 and min length 8'],
        match:[/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,  'Password must contain one upper character, one lower character and a number. Max length 15 and min length 8'],
    }, 
    
});

module.exports = mongoose.model('User', userSchema)