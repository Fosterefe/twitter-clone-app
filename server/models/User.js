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
    posts: 
    [
        { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Posts' 
        }
    ],
    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users'
        }
    ],
    follows: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users'
        }
    ]
});

module.exports = mongoose.model('Users', userSchema);