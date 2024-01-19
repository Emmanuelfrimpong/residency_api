const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ComplaintSchema = new Schema({
    id:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    description:{
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
    studentId:{
        type: String,
        required: true
    },
    studentName:{
        type: String,
        required: true
    },
    studentPhone:{
        type: String,
        required: true
    },
    studentImage:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    },
    roomNumber:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    severity:{
        type: String,
        
        
    },
    academicYear:{
        type: String,
        required: true
    },
    images:{
        type: Array,
       
    },
    location:{
        type: String
       
    },
    createdAt:{
        type: Number,
        required: true
    },

});

module.exports = mongoose.model('Complaint', ComplaintSchema);

