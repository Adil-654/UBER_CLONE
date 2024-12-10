const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname")
      .isLength({ min: 3 })
      .withMessage("First name must be alteast of 3 length"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be atleast of 6 character"),
  ],

  userController.registerUser
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be atleast of 6 character"),
  ],

  userController.loginUser
);
module.exports = router;