import express from "express";
import { categoryController } from "./category.controller";

const router = express.Router();

router.get("/create-category", categoryController.createCategory);

export const CategoryRouter = router;
