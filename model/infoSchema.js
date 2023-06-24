const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const infoSchema = new Schema({
    StudentName: {
        type: String,
        required: true,
    },
    StudentEmail: {
        type: String,
        required: true,
    },
    StudentFatherName: {
        type: String,
        required: true,
    },
    StudentClass: {
        type: Number,
        required: true,
    },
    StudentContact: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

module.exports = mongoose.model('infoSchema', infoSchema);