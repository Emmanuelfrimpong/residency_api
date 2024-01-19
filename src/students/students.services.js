const Users = require('../users/users.model');

exports.getAllStudents = async (academicYear) => {
    var users = await Users.find({ role: 'Student', isDeleted: false, academicYear: academicYear });
    return users;
};

exports.createStudent = async (body) => {
    var user = await Users.create(body);
    return user;
};

exports.updateStudent = async (id, body) => {
    await Users.findOneAndUpdate({ id: id, role: 'Student', academicYear: body.academicYear }, body);
    //return new updated user
    var user = await Users.findOne({ id: id, role: 'Student', academicYear: body.academicYear });
    return user;
};

exports.getStudentByIdAndAcademicYear = async (id, academicYear) => {
    var user = await Users.findOne({ id: id, role: 'Student', academicYear: academicYear });
    return user;
};

exports.getAllStudentsByRoom = async (room, academicYear) => {
    var users = await Users.find({ room: room, role: 'Student', academicYear: academicYear });
    return users;
};

