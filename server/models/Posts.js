const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    createdAt:  {
        type: Date,
        default: Date.now
    },
    owner_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    }
})

module.exports = mongoose.model('Posts', postSchema);