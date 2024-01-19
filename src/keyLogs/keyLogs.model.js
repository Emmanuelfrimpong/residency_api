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
    assistantImage:{
        type: String,
        
    },
    studentName:{
        type: String,
        required: true
    },
    studentPhone:{
        type: String,
        required: true
    },
    studentId:{
        type: String,
        required: true
    },
    studentImage:{
        type: String,
        
    },
    roomNumber:{
        type: String,
        required: true
    },
    activity:{
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
    time:{
        type: String,
        required: true
    },
    createdAt:{
        type: Number,
        required: true
    },
  
});

const KeyLogs = mongoose.model('KeyLogs', keyLogsSchema);
module.exports= KeyLogs;







