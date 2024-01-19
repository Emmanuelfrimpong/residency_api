const SettingsController = require('./settings.controller');
const express = require('express');
const router = express.Router();


router.get('/', SettingsController.getSettings);
router.post('/', SettingsController.saveSettings);


module.exports = router;