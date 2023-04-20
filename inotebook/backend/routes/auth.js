const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const { Await } = require("react-router-dom");
const jwt = require("jsonwebtoken");
JWT_SECRET = "JaiShreeRam$";
var fetchuser = require("../middleware/fetchuser");

// Create a User using post "api/auth/createUser"  No login required
router.post(
  "/creatuser",
  [
    body("name", "Enter the valid name").isLength({ min: 3 }),
    body("email", "Enter the valid Email").isEmail(),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    // If there are errors , return bad error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Check wether the user is already exist with the already existing email
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return req
          .status(400)
          .json({ error: "Sorry a user with the email is already exixted" });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      // Creater a new user
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_sec);
      res.json({ authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occured");
    }
  }
);

// Authenticate a User using: POST "/api/auth/login". No login required
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }

      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      res.json({ authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// Router 3 this is for to get the logged in user details POST "/api/auth/getuser"

router.post("/getuser", fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error("Internal Server Euro");
    res.status(500).send("Internal Server Errors");
  }
});

module.exports = router;
