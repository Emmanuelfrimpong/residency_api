const userService = require('../users/users.services');
const bcryptUtil = require('../utils/bcrypt');
exports.login = async (req, res) => {
    try {
        var id = req.body.id;
        var password = req.body.password;
        const user = await userService.getById(id.toUpperCase());
        if (user) {
            const isPasswordMatch = await bcryptUtil.compareHash(password, user.password);

            if (!isPasswordMatch) {
                return res.json({
                    success: false,
                    message: 'Password is incorrect.'
                });
            }else{
                //save attendance
                return res.json({
                success: true,
                message: "User logged in successfully",
                data: user,
            });
        }
        } else {
            return   res.json({
                success: false,
                message: "No user found with given id",
            });
        }
    } catch (err) {
        console.log(err);
        return res.json({
            success: false,
            message: err.message
        });
    }
}
// update user password and security question

exports.updatePassword = async (req, res) => {
    try {
        const body = req.body;
        const hashedPassword = await bcryptUtil.createHash(body.password);
        body.password = hashedPassword;
        const user = await userService.update(body.id,body);
        return res.json({
            success: true,
            message: "Password updated successfully",
            data: user
        });
    } catch (err) {
       
       return res.json({
            success: false,
            message: err
        });
    }
}