const MessageController = require("./messages.controller");
const express = require("express");
const router = express.Router();

router.get("/", MessageController.getAllMessages);
router.post("/", MessageController.createMessage);
router.put("/:id", MessageController.updateMessage);

module.exports = router;
