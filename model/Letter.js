const mongoose = require("mongoose");

const letterSchema = new mongoose.Schema({
    from: {
        type: String,
        min: 3,
        max: 20
    },

    to: {
        type: String,
        min: 6,
        max: 1024
    },

    content: {
        type: String,
        required: true,
        min: 10    
    },

    open: {
        type: Boolean,
        required: true,
    }
})

module.exports = mongoose.model('Letter', letterSchema);
