const User = require('./users.model');
const bcryptUtil = require('../utils/bcrypt');
exports. getById = async (id) => {
  return await User.findOne({
    id: id,
    isDeleted: false
  });
}

exports. update = async (id, userParam) => {
    const user = await User.findOne({
        id: id,
        isDeleted: false
    });
    
    if (!user) throw 'User not found';
    
    Object.assign(user, userParam);
    
    return await user.save();

}

//one time function to update all users academic year
//get all users academic year and replace with '/' to '-'

exports. updateAllUsersPassword = async () => {
    const users = await User.find();
    users.forEach(async (user) => {
        var password = user.password;
        if (password && password.length<15){
            const hashedPassword = await bcryptUtil.createHash(password);
            user.password = hashedPassword;
            await user.save();
        }        
    });
    return true;
};