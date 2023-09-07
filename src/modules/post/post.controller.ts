import { Request, Response } from "express";
import { postService } from "./post.service";

const createPost = async (req: Request, res: Response) => {
  const data = await postService.createPost(req.body);
  res.send({
    success: true,
    message: "post created successFully!",
    data,
  });
};

const getAllPost = async (req: Request, res: Response) => {
  const options = req.query;
  try {
    const result = await postService.getAllPost(options);

    res.send({
      success: true,
      message: "post retrive successfully!",
      data: result.data,
      total: result.total,
    });
  } catch (error) {
    res.send(error);
  }
};

const updatePost = async (req:Request,res:Response) => {
  const id = parseInt(req.params.id);
  try {
    const result = await postService.updatePost(req.body,id);
    res.send({
      success: true,
      message: "post updated successfully!",
      data: result,
    });
  } catch (error) {
    res.send(error)
  }
}

const deletePost = async (req:Request,res:Response) => {
  const id = parseInt(req.params.id);
  try {
    const result = await postService.deletePost(id);
    res.send({
      success: true,
      message: "post deleted successfully!",
      data: result,
    });
  } catch (error) {
    res.send(error)
  }
}

export const postController = {
  createPost,
  getAllPost,
  updatePost,
  deletePost,
};
