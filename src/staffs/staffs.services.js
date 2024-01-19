const Users = require('../users/users.model');


exports.getAllStaffs = async () => {
    var users = await Users.find({ role: { $in: ['Hall Admin', 'Hall Assistant'] } , isDeleted: false});
    return users;
};

exports.getStaffById = async (id) => {
    var user = await Users.findOne({ id: id, role: { $in: ['Hall Admin', 'Hall Assistant'] }, isDeleted: false });
    return user;
}


exports.saveStaff = async (body) => {
    var user = await Users.create(body);
    return user;
}


//update staff

exports.updateStaff = async (id, body) => {
    await Users.findOneAndUpdate({ id: id, role: { $in: ['Hall Admin', 'Hall Assistant'] } }, body);
    //return new updated user
    var user = await Users.findOne({ id: id, role: { $in: ['Hall Admin', 'Hall Assistant'] } });
    return user;
}