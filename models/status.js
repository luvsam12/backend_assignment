const mongoose = require("mongoose")

//create schema

const Status = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('status', Status);