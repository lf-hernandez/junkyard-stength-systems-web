const mongoose = require('mongoose');

const schema = new mongoose.Schema(
            {
                name: String,
                slug: String,
                movementType: String,
                muscles: Array,
                description: String
            },
            {
                timestamps: true
            }
        );

const model = new mongoose.Model('exercise', schema);

module.exports = model;