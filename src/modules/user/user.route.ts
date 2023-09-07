import express from "express";
import { userController } from "./user.controller";

const router = express.Router();

router.post("/create-user", userController.insertUser);
router.post("/profile", userController.profileInsertOrUpdate);
router.get("/", userController.getAllUser);
router.get("/:id", userController.getSingleUser);

export const UserRoutes = router;
