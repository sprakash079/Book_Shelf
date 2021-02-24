const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        title: {
            type: String,
            default: 'n/a'
        },
        category: {
            type: String,
            default: 'n/a'
        },
        photo: {
            type: String,
            default: 'n/a'
        },
        price: {
            type: String,
            default: 'n/a'
        },
        desc: {
            type: String,
            default: 'n/a'
        }
    },
    ownerID: {
        type: String,
        required: true
    }

}, { timestamps: true })

const Item = mongoose.model('Item', itemSchema);
module.exports = { Item };