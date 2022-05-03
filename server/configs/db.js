const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect(process.env.DATABASE_URI);
        console.log('Connected to db');
    } catch (err) {
        console.error(err)
    }
}

module.exports = connectDB;