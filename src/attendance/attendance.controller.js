const AttendanceService = require('./attendance.services');


exports.getAllAttendance = async (req, res) => {
    try {
        var attendance = await AttendanceService.getAllAttendance(req.query.academicYear);
        if(attendance){
            return res.json({
                success: true,
                message: "Attendance fetched successfully",
                data: attendance
            });
        }else{
            return res.json({
                success: false,
                message: "No attendance found",
            });
        }
        
    } catch (err) {
        return res.json({
            success: false,
            message: err.message
        });
    }
}

exports.createAttendance = async (req, res) => {
    try {
        const body = req.body;
        const attendance = await AttendanceService.createAttendance(body);
        if(!attendance) return res.json({
            success: false,
            message: "Attendance not created",
        });
        return res.json({
            success: true,
            message: "Attendance created successfully",
            data: attendance
        });
    } catch (err) {
        return res.json({
            success: false,
            message: err.message
        });
    }
}
