import express from "express";
import authRoutes from "./auth.routes.js";
import userRoutes from "./user.routes.js";
import resourceRoutes from "./resource.routes.js";
import categoryRoutes from "./category.routes.js";
const router = express.Router();

router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/resource", resourceRoutes);
router.use("/category", categoryRoutes);

export default router;
