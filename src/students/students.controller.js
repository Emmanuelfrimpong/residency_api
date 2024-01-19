const StudentService = require('./students.services');
const bcryptUtil = require('../utils/bcrypt');
exports.getAllStudents = async (req, res) => {
    try {
        var students = await StudentService.getAllStudents(req.query.academicYear);
        if (!students) {
            return res.json({
                success: true,
                message: "No student found",
                data: []
            });
        } else {
            return res.json({
                success: true,
                data: students
            });
        }

    } catch (error) {
        return res.json({
            success: false,
            message: error
        });
    }
};

//sve student
exports.saveStudent = async (req, res) => {
    try {
        const body = req.body;
        // get students by id and academic year
        const existenStudent = await StudentService.getStudentByIdAndAcademicYear(body.id, body.academicYear);
        if (existenStudent) {
            return res.json({
                success: false,
                message: 'Student with same ID already exist.',
                data: []
            });
        } else {
            // check if room is not full (already up to 4 students)
            const roomMembers = await StudentService.getAllStudentsByRoom(body.room, body.academicYear);
            if (roomMembers.length >= 4) {
                return res.json({
                    success: false,
                    message: 'Room is already full (Already has 4 ocupant).',
                    data: []
                });
            } else {
                var password = body.password;
                const hashedPassword = await bcryptUtil.createHash(password);
                body.password = hashedPassword;
                const student = await StudentService.createStudent(body);
                if (student) {
                    return res.json({
                        success: true,
                        message: 'Student created successfully.',
                        data: student
                    });
                } else {
                    return res.json({
                        success: false,
                        message: 'Student not created.',
                        data: []
                    });
                }
            }
        }
    } catch (error) {
        return res.json({
            success: false,
            message: error
        });
    }
};

//update student
exports.updateStudent = async (req, res) => {
    try {
        const body = req.body;
        const id = req.params.id;
        // check if room is not full (already up to 4 students)
        const roomMembers = await StudentService.getAllStudentsByRoom(body.room, body.academicYear);
        //remove current student from room members
        var index = roomMembers.findIndex(x => x.id == id);
        if (index !== -1) roomMembers.splice(index, 1);
        if (roomMembers.length >= 4) {
            return res.json({
                success: false,
                message: 'Room is already full (Already has 4 ocupant).',
                data: []
            });
        }else{
            const student = await StudentService.updateStudent(id, body);
            if (student) {
                return res.json({
                    success: true,
                    message: 'Student updated successfully.',
                    data: student
                });
            } else {
                return res.json({
                    success: false,
                    message: 'Student not updated.',
                    data: []
                });
            }
        }    
    } catch (error) {
        return res.json({
            success: false,
            message: error
        });
    }
};


//force save student
exports.forceSaveStudent = async (req, res) => {
    try {
        const body = req.body;
        const existenStudent = await StudentService.getStudentByIdAndAcademicYear(body.id, body.academicYear);
        if (existenStudent) {
            return res.json({
                success: false,
                message: 'Student with same ID already exist.',
                data: []
            });
        } else {
        var password = body.password;
        const hashedPassword = await bcryptUtil.createHash(password);
        body.password = hashedPassword;
        const student = await StudentService.createStudent(body);
        if (student) {
            return res.json({
                success: true,
                message: 'Student created successfully.',
                data: student
            });
        } else {
            return res.json({
                success: false,
                message: 'Student not created.',
                data: []
            });
        }
    }
    } catch (error) {
        return res.json({
            success: false,
            message: error
        });
    }
};

//update student
exports.forceUpdateStudent = async (req, res) => {
    try {
        const body = req.body;
        const id = req.params.id;
        const student = await StudentService.updateStudent(id, body);
        if (student) {
            return res.json({
                success: true,
                message: 'Student updated successfully.',
                data: student
            });
        } else {
            return res.json({
                success: false,
                message: 'Student not updated.',
                data: []
            });
        }
    } catch (error) {
        return res.json({
            success: false,
            message: error
        });
    }
};