const mongoose = require('mongoose');
const validator = require('validator');

const valid = (password) => {
    if (password.length > 15 || password.length < 8) return false;
    if (!password.match(/[a-z]/g)) return false;
    if (!password.match(/[A-Z]/g)) return false;
    if (!password.match(/[0-9]/g)) return false;

    return true;
}

const userSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now()
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, 'invalid email']
    },
    phoneNumber: {
        type: String,
        validate: [validator.isMobilePhone, 'invalid number']
    },
    name: {
        type: String,
        required: [true, 'name must be provided'],
    },
    username: {
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
    password: {
        type: String,
        min: 8,
        max: 15,
        required: true,
        validate: [valid, 'Password must contain one upper character, one lower character and a number. Max length 15 and min length 8'],
    },
    post: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
    }],

});

module.exports = mongoose.model('User', userSchema)