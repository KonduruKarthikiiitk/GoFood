import express from "express";
import bcrypt from "bcryptjs";
import User from "../Server/Models/User.js";
import { body, validationResult } from "express-validator";
import jwd from "jsonwebtoken";
const router = express.Router();
const app = express();
router.use(express.json());
const jwtSecret = "awsedrftgyhuawsedrftgyhuzxcvbnmj"
router.post(
  "/createuser",

  body("email").isEmail(),
  body("name").isLength({ min: 5 }),
  body("password").isLength({ min: 5 }),
  async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt);

    await User.create({
      name: req.body.name,
      password: secPassword,
      email: req.body.email,
      location: req.body.location,
    }).then(res.json({ success: true }));
  }
);
router.post(
  "/loginuser",
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array() });
    }
    try {
      let email = req.body.email;
      let userData = await User.findOne({ email });
      if (!userData) {
        return res
          .status(400)
          .json({ errors: "Try logging with correct credentials " });
      }

      const pwdCompare = await bcrypt.compare(
        req.body.password,
        userData.password
      )
     
      
      if (!pwdCompare) { 
        return res
          .status(400)
          .json({ errors: "Try logging with correct credentials " });
      }

      const data = {
        user :{
          id:userData.id
        } 
      } 
      const authToken = jwd.sign(data,jwtSecret)

      return res.json({ success: true,authToken });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);
export default router;
