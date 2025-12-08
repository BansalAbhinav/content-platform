import express from "express";
import {
  userLogin,
  userRegister,
  userUpdate,
} from "../controllers/user.controller.js";

const router = express.Router();

//User Profile Routes
router.post("/signUp", userRegister);
router.post("/signIn", userLogin);
router.post("/userUpdate", userUpdate);

export default router;
