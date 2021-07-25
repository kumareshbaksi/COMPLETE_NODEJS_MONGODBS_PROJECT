const mongoose = require('mongoose')

const tourist = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true
    }
});

const register = new mongoose.model('touristName', tourist);

module.exports = register;