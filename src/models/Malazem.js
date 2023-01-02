const mongoose = require("mongoose");


const malzamaSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    subject: {
        type: String,
        required:true
    },
    teacher: {
        type: String,
        required:true
    },

});

module.exports = mongoose.model("Malzama", malzamaSchema);