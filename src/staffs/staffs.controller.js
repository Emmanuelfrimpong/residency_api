const StaffService = require('./staffs.services');
const bcryptUtil = require('../utils/bcrypt');

exports.getAllStaffs = async (req, res) => {
    try {
        const staffs = await StaffService.getAllStaffs();
        if (staffs) {
            return res.json({
                success: true,
                data: staffs
            });
        } else {
            return res.json({
                success: true,
                message: "No staff found in the system",
            });
        }
    } catch (err) {
        return res.json({
            success: false,
            message: err
        });
    }
    
};

exports.getStaffById = async (req, res) => {
    try {
        const id = req.params.id;
        const staff = await StaffService.getStaffById(id);
        if (staff) {
            return  res.json({
                success: true,
                data: staff
            });
        } else {
            return  res.json({
                success: true,
                message: "No staff found with given id",
            });
        }
    } catch (err) {
        return  res.json({
            success: false,
            message: err
        });
    }
    
};


exports.saveStaff = async (req, res) => {
    try {
       
        const body = req.body;
        var password = body.password;
        const hashedPassword = await bcryptUtil.createHash(password);
        body.password = hashedPassword;
        const staff = await StaffService.saveStaff(body);
        return res.json({
            success: true,
            message: 'Staff created successfully.',
            data: staff
        });
    } catch (err) {
        return res.json({
            success: false,
            message: err.message
        });
    }
    
};

exports.updateStaff = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const staff = await StaffService.updateStaff(id, body);
        return res.json({
            success: true,
            message: 'Staff updated successfully.',
            data: staff
        });
    } catch (err) {
      return  res.json({
            success: false,
            message: err.message
        });
    }
};
