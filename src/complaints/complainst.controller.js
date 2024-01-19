const ComplaintService = require('./complaints.services');

exports.getAllComplaints = async (req, res) => {
    try {
        var query = req.query.academicYear;
        var complaints = await ComplaintService.getAllComplaints(query);
        if (!complaints) {
            return res.json({ success: false, message: 'No complaints found' });
        }
        return res.json({ success: true, data: complaints, message: 'Complaints found' });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};

exports.createComplaint = async (req, res) => {
    try {
        var body = req.body;
        var complaint = await ComplaintService.createComplaint(body);
        if (!complaint) {
            return res.json({ success: false, message: 'Complaint not created' });
        }
        return res.json({ success: true, data: complaint, message: 'Complaint created' });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};

exports.updateComplaint = async (req, res) => {
    try {
        var id = req.params.id;
        var body = req.body;
        var complaint = await ComplaintService.updateComplaint(id, body);
        if (!complaint) {
            return res.json({ success: false, message: 'Complaint not updated' });
        }
        return res.json({ success: true, data: complaint, message: 'Complaint updated' });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
}