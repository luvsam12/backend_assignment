const mongoose = require("mongoose")

//create schema

const Status = mongoose.Schema({
    _id: {
        type: String
    },
    input: {
        type: String
    },
    tag: {
        type: String
    },
    case: {
        type: String
    },
    packetLenght: {
        type: Number
    },
    time: {
        type: Date
    },
    GPSDataLength: {
        type: Number
    },
    noSatellites: {
        type: Number
    },
    gps: {
        type: Array
    },
    speed: {
        type: Number
    },
    stateHeading: {
        positioningState: {
            type: Boolean
        },
        longitude: {
            type: String
        },
        latitude: {
            type: String
        },
        heading: {
            type: Number
        }
    },
    output: {
        type: String
    },
    imei: {
        type: String
    },
    socket: {
        type: String
    },
    device: {
        type: String
    },
    client: {
        type: String
    },
    battery: {
        type: Number
    },
    createdAt: {
        type: Date
    }
})

module.exports = mongoose.model('status', Status);