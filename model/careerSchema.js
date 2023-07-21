const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const careerSchema = new Schema({
    Name: {
        type: String,
        required: true,
    },
    Specialization: {
        type: String,
        required: true,
    },
    Experience: {
        type: Number,
        required: true,
    },
    Resume: {
        type: String,
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