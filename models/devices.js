const mongoose = require("mongoose")

//create schema

const Devices = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('devices', Devices);