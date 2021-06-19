const mongoose = require("mongoose")
const Status = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('status', Status);