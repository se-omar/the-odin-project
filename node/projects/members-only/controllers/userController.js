import { body, validationResult } from "express-validator";
import bcryptjs from "bcryptjs";
import passport from "passport";
import User from "../models/user.js";

export const signInGet = (req, res, next) => {
  console.log("sign up page");
  res.render("sign-in");
};

export const signInPost = (req, res, next) => {
  passport.authenticate("local", (err, user, opt) => {
    if (opt) {
      res.render("sign-in", {
        errors: [{ msg: opt.message }],
      });
    } else {
      res.redirect("/");
    }
  })(req, res, next);
};

export const signUpGet = (req, res, next) => {
  console.log("sign up page");
  res.render("sign-up", {
    title: "sign up page title",
  });
};

export const signUpPost = [
  body("first_name").trim().isLength({ min: 1 }).escape(),
  body("last_name").trim().isLength({ min: 1 }).escape(),
  body("password", "You must type a password")
    .exists({ checkFalsy: true }),
  body("repeatPassword", "You must type a confirmation password")
    .exists({ checkFalsy: true })
    .custom((value, { req }) => value === req.body.password)
    .withMessage("The passwords do not match"),
  body("birth_date", "Invalid date")
    .isISO8601()
    .toDate(),
  body("email", "invalid email")
    .trim()
    .isLength({ min: 1 })
    .isEmail()
    .escape(),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("sign-up", {
        title: "sign up page",
        errors: errors.array(),
      });
    }
    try {
      const oldUser = await User.findOne({ email: req.body.email });
      if (oldUser) {
        return res.render("sign-up", {
          title: "sign up page",
          errors: [{ msg: "user already exists" }],
        });
      }
      const hashedPass = await bcryptjs.hash(req.body.password, 3);
      const newUser = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        birth_date: req.body.birth_date,
        password: hashedPass,
      });
      await newUser.save();

      return res.redirect("/");
    } catch (err) {
      return console.log(err);
    }
  },
];
