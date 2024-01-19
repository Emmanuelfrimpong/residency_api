const mongoose = require('mongoose');
const Schema = mongoose.Schema;




const messageSchema = new Schema({
    id: { type: String, required: true },
    senderId: { type: String, required: true },
    message: { type: String, required: true },
    isDeleted: { type: Boolean, required: true },
    status: { type: String, required: true },
    recipients: { type: Array, required: true },
    responseData: { type: Array },
    accademicYear: { type: String, required: true },
    createdAt: { type: Number, required: true },
  
});

module.exports = mongoose.model('Message', messageSchema, 'messages');

