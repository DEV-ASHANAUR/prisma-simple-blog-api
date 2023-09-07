import { Request, Response } from "express";
import { CategoryService } from "./category.service";

const createCategory = async (req: Request, res: Response) => {
  const data = await CategoryService.createCategory(req.body);

  res.send({
    success:true,
    message: "Category Created SuccessFully!",
    data,
  });
};

export const categoryController = {
  createCategory,
};
