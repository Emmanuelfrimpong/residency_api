const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SettingsSchema = new Schema({
    id: { type: String, unique: true , required: [true, 'Settings ID is required']},
    hallName: { type: String, required: [true, 'Hall name is required']},
    targetGender: { type: String, required: [true, 'Targeted gender is required']},
    hallLogo: { type: String, default: null},
    academicYear: { type: String, required: [true, 'Academic year is required'] },
    createdAt: { type: Number, default: Date.now() },

});


const Settings = mongoose.model('Settings', SettingsSchema);
module.exports = Settings;

// String ? id;
// String ? hallName;
// String ? targetGender;
// String ? hallLogo;
// String ? academicYear;
// int ? createdAt;