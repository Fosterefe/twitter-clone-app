const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    createdAt:  {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Posts', postSchema);