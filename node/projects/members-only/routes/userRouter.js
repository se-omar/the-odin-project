import express from "express";

const router = express.Router();

router.get("/sign-up", (req, res, next) => {
  console.log("sign up page");
  res.render("home");
});
export default router;
