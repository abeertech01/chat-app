// external imports
const express = require("express");

//inter exports
const { getInbox } = require("../controller/inboxController.js");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse.js");

const router = express.Router();

//inbox page
router.get("/", decorateHtmlResponse("Inbox"), getInbox);

module.exports = router;
