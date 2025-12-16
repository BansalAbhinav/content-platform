import express from "express";
import {
  getAllUsers,
  userUpdate,
} from "../controllers/user.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { asyncHandler } from "../helpers/helper.js";
import { isAdminUser } from "../middlewares/admin.middlewares.js";

const router = express.Router();

//User Profile Routes

router.get("/allUsers",authMiddleware, isAdminUser,asyncHandler(getAllUsers))
router.post("/userUpdate", authMiddleware, asyncHandler(userUpdate));

export default router;
