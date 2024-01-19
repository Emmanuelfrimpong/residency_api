const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id: { type: String, unique: true , required: [true, 'User ID is required']},
    firstname: { type: String, required: [true, 'First name is required']},
    surname: { type: String, required: [true, 'Surname is required']},
    email: { type: String, default: null},
    phone: { type: String, default: null},
    block: { type: String, default: null},
    room: { type: String, default: null },
    department: { type: String, default: null },
    image: { type: String, default: null },
    password: {type:String,required:[true, 'Password is required']},
    level: { type: String, default: null },
    gender: { type: String, default: 'Male' },
    role: { type: String, required: [true, 'Role is required'] },
    question1: { type: String, default: null },
    answer1: { type: String, default: null },
    question2: { type: String, default: null },
    answer2: { type: String, default: null },
    isDeleted: { type: Boolean, default: false },
    academicYear: { type: String, default: null },
    createdAt: { type: Number, default: Date.now() },
});

UserSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function(doc, ret) {
        // remove these props when object is serialized
        delete ret._id;
    }

});

module.exports = mongoose.model('User', UserSchema);


