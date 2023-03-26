import express from "express";

const router = express.Router();

router.get("/create", (req, res, next) => {
  res.render("message-form");
});

router.get("/update", (req, res, next) => {
  res.render("message-form");
});

export default router;
