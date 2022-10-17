import express from "express";

import { signUp, signIn } from "../controllers/authControllers.js";
import {
  signUpValidate,
  signInValidate,
} from "../middlewares/schemaMiddlewares.js";

const router = express.Router();

router.get("/status", (req, res) => {
  res.sendStatus(200);
});
router.post("/sign-up", signUpValidate, signUp);
router.post("/sign-in", signInValidate, signIn);

export default router;
