const mongoose = require('mongoose');

const schema = new mongoose.Schema(
            {
                username: String,
                firstName: String,
                lastName: String,
                email: String,
            },
            {
                timestamps: true
            }
        );

const model = new mongoose.Model('user', schema);

module.exports = model;