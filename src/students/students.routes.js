const StudentsController = require('./students.controller');
const express = require('express');
const router = express.Router();






router.get('/', StudentsController.getAllStudents);
router.post('/', StudentsController.saveStudent);
router.put('/:id', StudentsController.updateStudent);
//save and update without checking if room is full
router.post('/force', StudentsController.forceSaveStudent);
router.put('/force/:id', StudentsController.forceUpdateStudent);


module.exports = router;