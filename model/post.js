const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now()
    },
    title:{
        type: String,
        //required: [true, "title cannot be empty"],
        max: [20, "title cannot exceed 20 character"]
    },
    body: {
        type: String,
        max: [145, "body cannot exceed 145 character"],
    },
    tags:{
        type: String,
    },
    comment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }
});

module.exports = mongoose.model('Post', postSchema);