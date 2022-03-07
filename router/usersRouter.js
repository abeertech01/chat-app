// external imports
const express = require("express");

//inter exports
const { getUsers, addUser } = require("../controller/usersController.js");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse.js");
const avatarUpload = require("../middlewares/users/avatarUpload.js");
const {
  addUserValidators,
  addUserValidationHandler,
} = require("../middlewares/users/userValidators.js");

const router = express.Router();

//users page
router.get("/", decorateHtmlResponse("Users"), getUsers);

// add user
router.post(
  "/",
  avatarUpload,
  addUserValidators,
  addUserValidationHandler,
  addUser
);

module.exports = router;
