const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const trainingSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    exercises: [
        {
            exercise: {
                type: Object,
                required: true,
            },
        },
    ],
    notes: [{ body: String, date: Date }],
    user: {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
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

module.exports = mongoose.model("Training", trainingSchema);
