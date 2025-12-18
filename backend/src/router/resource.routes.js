import express from "express";
import { getAllResources } from "../controllers/resource.controller.js";
import { asyncHandler } from "../helpers/helper.js";

const router = express.Router();


//routes

router.get("/",asyncHandler(getAllResources)) //get all
router.get("/:id",asyncHandler()) //get single
router.post("/",asyncHandler()) //add 
router.put("/",asyncHandler()) //update
router.delete('/:id',asyncHandler()) //delete soft delete
router.delete("/hardDelete/:id",asyncHandler()) //hard delete only for admin

export default router;
