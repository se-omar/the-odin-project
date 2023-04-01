import express from "express";
import * as userController from "../controllers/userController.js";

const router = express.Router();

router.get("/sign-in", userController.signInGet);

router.get("/sign-up", userController.signUpGet);

router.post("/sign-up", userController.signUpPost);

router.post("/sign-in", userController.signInPost);

export default router;
