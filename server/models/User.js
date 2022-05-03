const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    gmail: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Posts' }]
});

module.exports = mongoose.model('Users', userSchema);