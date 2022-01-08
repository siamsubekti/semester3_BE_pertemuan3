var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let Student = new Schema({
    nama: {
        type: String,
        trim: true,
        default: null,
        required: true,
    },
    nim: {
        type: String,
        trim: true,
        default: null,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        default: null,
        required: true,
    },
    jurusan: {
        type: String,
        trim: true,
        default: null,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
})

module.exports = mongoose.model('Student', Student);