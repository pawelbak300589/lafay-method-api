const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    created: {
        type: Date,
        default: Date.now,
        required: true,
    },
    modified: {
        type: Date,
    },
    removed: {
        type: Date,
    },
});

module.exports = mongoose.model("Exercise", exerciseSchema);
