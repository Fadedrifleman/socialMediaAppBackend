const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    content: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },

});

module.exports = mongoose.model('Comment', commentSchema);