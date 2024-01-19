const AuthController = require('./auth.controller');
const express = require('express');
const router = express.Router();


router.post('/login', AuthController.login);
router.put('/updatePassword', AuthController.updatePassword);

module.exports = router;