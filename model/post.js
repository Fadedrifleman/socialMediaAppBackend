const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now()
    },
    
});