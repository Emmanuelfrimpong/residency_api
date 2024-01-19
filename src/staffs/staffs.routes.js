const StaffController = require('./staffs.controller');
const express = require('express');
const router = express.Router();



router.get('/', StaffController.getAllStaffs);
router.get('/:id', StaffController.getStaffById);
router.post('/', StaffController.saveStaff);
router.put('/:id', StaffController.updateStaff);


module.exports = router;
 