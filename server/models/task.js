const mongoose = require("mongoose");

let TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        required: () => {
            return this.dueDate >= Date.now()
        }
    },
    label: {
        type: mongoose.SchemaTypes.String,
        default: "other",
        enum: ["other", "personal", "work", "shopping"]
    },
    status: {
        type: Number,
        default: 1,
        enum: [0, 1, 2] // 0-Completed 1-In Progress 2-New/Todo
    },
    userId: {
        type: mongoose.SchemaTypes.String        
    }
});

module.exports = Task = mongoose.model('Task', TaskSchema);;