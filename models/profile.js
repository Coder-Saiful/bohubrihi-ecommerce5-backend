const {Schema, model} = require('mongoose');

module.exports.Profile = Schema({
    user: {
        type: Schema.Types.ObjectId,
        unique: true,
        required: true,
        ref: "User"
    },
    address1: String,
    address2: String,
    phone: Number,
    city: String,
    state: String,
    postcode: Number,
    country: String
}, {timestamps: true});