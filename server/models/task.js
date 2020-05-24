const mongoose = require("mongoose");

let TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    priority: {
        type: String,
        default: "LOW",
        enum: ["HIGH", "LOW", "MEDIUM"]
    },
    dueDate: {
        type: Date,
        required: () => {
            return this.dueDate >= Date.now()
        }
    },
    duration: {
        type: Number,
        required: () => {
            return this.duration > 0;
        }
    },
    category: {
        type: mongoose.SchemaTypes.String,
        ref: 'Category.title'
    }
});

module.exports = Task = mongoose.model('Task', TaskSchema);;