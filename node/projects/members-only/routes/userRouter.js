import express from "express";

const router = express.Router();

router.get("/sign-in", (req, res, next) => {
  console.log("sign in page");
  res.render("sign-in");
});

router.get("/sign-up", (req, res, next) => {
  console.log("sign up page");
  res.render("sign-up");
});

export default router;
