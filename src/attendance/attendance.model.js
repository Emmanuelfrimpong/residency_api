const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const keyLogsSchema = new Schema({
    id:{
        type: String,
        required: true
    },
    assistantId:{
        type: String,
        required: true
    },
    assistantName:{
        type: String,
        required: true
    },
    academicYear:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    action:{
        type: String,
        required: true
    },
    time:{
        type: String,
        required: true
    },
    createdAt:{
        type: Number,
        default: Date.now()
    },
});

//export
module.exports = mongoose.model('Attendance', keyLogsSchema);















