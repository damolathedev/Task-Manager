const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    'name':{
        type: String,
        required: [true, "Must provide a task"],
        trim: true,
        maxlength:[200, "Task must not be more than 20 characters"]
    },
    'completed': {
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('Task',TaskSchema)