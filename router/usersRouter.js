// external imports
const express = require("express");

//inter exports
const { getUsers } = require("../controller/usersController.js");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse.js");

const router = express.Router();

//users page
router.get("/", decorateHtmlResponse("Users"), getUsers);

module.exports = router;
