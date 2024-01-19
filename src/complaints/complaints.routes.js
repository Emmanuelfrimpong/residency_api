const Complaints = require('./complainst.controller');
const express = require('express');
const router = express.Router();




router.get('/', Complaints.getAllComplaints);
router.post('/', Complaints.createComplaint);
router.put('/:id', Complaints.updateComplaint);


module.exports = router;