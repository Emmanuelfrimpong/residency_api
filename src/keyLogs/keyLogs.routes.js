const KeyLogController = require('./keyLogs.controller');
const express = require('express');
const router = express.Router();



router.get('/',KeyLogController.getAllKeyLogs);
router.post("/",KeyLogController.createKeyLogs);
router.put("/:id",KeyLogController.updateKeyLogs);



module.exports = router;