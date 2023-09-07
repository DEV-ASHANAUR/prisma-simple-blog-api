import { Request, Response } from "express";
import { UserService } from "./user.service";

const insertUser = async (req: Request, res: Response) => {
  const data = await UserService.insertUser(req.body);
  res.status(201).json({
    message: "User inserted successfully",
    data,
  });
};

const getAllUser = async (req: Request, res: Response) => {
  const data = await UserService.getAllUser();
  res.status(200).json({
    message: "User retrive successfully!",
    data,
  });
};

const getSingleUser = async (req: Request, res: Response) => {
  const data = await UserService.getSingleUser(parseInt(req.params.id));
  res.status(200).json({
    message: "User retrive successfully!",
    data,
  });
};

const profileInsertOrUpdate = async (req: Request, res: Response) => {
  const data = await UserService.profileInsertOrUpdate(req.body);
  res.status(200).json({
    message: "User update successfully!",
    data,
  });
};

export const userController = {
  insertUser,
  getAllUser,
  getSingleUser,
  profileInsertOrUpdate,
};
