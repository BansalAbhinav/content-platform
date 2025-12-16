import express from "express";
import {
  userLogin,
  userRegister,
  userUpdate,
} from "../controllers/user.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { asyncHandler } from "../helpers/helper.js";

const router = express.Router();

//User Profile Routes
router.post("/signUp", asyncHandler(userRegister));
router.post("/signIn", asyncHandler(userLogin));
router.post("/userUpdate", authMiddleware, asyncHandler(userUpdate));

export default router;
