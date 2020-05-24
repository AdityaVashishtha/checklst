const mongoose = require("mongoose");

categorySchemaStructure = new mongoose.Schema({
    title: {
        type: String,        
        required: true,                
        unique: true
    },
    description: {
        type: String
    }
});

module.exports = mongoose.model('Category', categorySchemaStructure);