const AttendanceController = require('./attendance.controller');
const express = require('express');
const router = express.Router();



router.get('/',AttendanceController.getAllAttendance);
router.post("/",AttendanceController.createAttendance);


module.exports = router;