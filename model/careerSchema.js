const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const careerSchema = new Schema({
    Name: {
        type: String,
        required: true,
    },
    Subject: {
        type: String,
        required: true,
    },
    Experience: {
        type: String,
        required: true,
    },
    Resume: {
        type: String,
        required: true,
    },
    LastSalary: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

module.exports = mongoose.model('careerSchema', careerSchema);