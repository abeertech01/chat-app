// external imports
const express = require("express");

//inter exports
const { getLogin } = require("../controller/loginController.js");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse.js");

const router = express.Router();

//login page
router.get("/", decorateHtmlResponse("Login"), getLogin);

module.exports = router;
