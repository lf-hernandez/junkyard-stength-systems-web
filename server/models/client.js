const mongoose = require('mongoose');

const schema = new mongoose.Schema(
            {
                firstName: String,
                lastName: String,
                email: String,
                phone: String,
                checkInDates: Array,
            },
            {
                timestamps: true
            }
        );

const model = new mongoose.Model('client', schema);

module.exports = model;