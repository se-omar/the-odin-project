import express from "express";
import * as userController from "../controllers/userController.js";

const router = express.Router();

router.get("/sign-in", userController.signInGet);

router.get("/sign-up", userController.signUpGet);

router.post("/sign-up", userController.signUpPost);

export default router;
