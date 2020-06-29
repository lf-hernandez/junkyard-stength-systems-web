const mongoose = require('mongoose');

const schema = new mongoose.Schema(
            {
                name: String,
                exerciseSelection: Array
            },
            {
                timestamps: true
            }
        );

const model = new mongoose.Model('template', schema);

module.exports = model;