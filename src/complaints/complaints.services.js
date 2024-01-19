const Complaints = require('./complaints.model');

exports.getAllComplaints = async (academicYear) => {
    //return where status is not deleted
    var complaints = await Complaints.find({ status: { $ne: 'Deleted' }, academicYear: academicYear});
    return complaints;
};

exports.createComplaint = async (body) => {
    var complaint = await Complaints.create(body);
    return complaint;
};

exports.updateComplaint = async (id, body) => {

    await Complaints.findOneAndUpdate({ id: id, status: { $ne: 'Deleted' } }, body);
    //return new updated complaint
    var complaint= await Complaints.findOne({ id: id });
    return complaint;
};
