const mongoose = require('mongoose');

const schema = new mongoose.Schema(
            {
                name: String,
                week: Number,
                exerciseSelection: Array,
                volume: Number
            },
            {
                timestamps: true
            }
        );

const model = new mongoose.Model('program', schema);

module.exports = model;