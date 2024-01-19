const Attendance = require('./attendance.model');

exports.getAllAttendance = async (academicYear) => {
    var attendance = await Attendance.find({academicYear: academicYear});
    return attendance;
}

exports.createAttendance = async (body) => {
    var attendance = await Attendance.create(body);
    return attendance;
}

