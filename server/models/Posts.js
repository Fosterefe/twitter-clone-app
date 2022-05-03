const { integerPropType } = require('@mui/utils');
const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    createdAt:  {
        type: Date,
        default: new Date()
    },
    owner_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    likes: {
        amount: {
            type: Number,
            default: 0
        },
        users: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Users'
            }
        ]
    }
})

module.exports = mongoose.model('Posts', postSchema);