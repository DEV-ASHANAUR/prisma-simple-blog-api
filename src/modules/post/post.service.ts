import { Post, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
/**
 * method getAllPost
 * @param data
 * @returns
 */
const createPost = async (data: Post): Promise<Post> => {
  const result = await prisma.post.create({
    data,
    include: {
      author: true,
      category: true,
    },
  });
  return result;
};
const getAllPost = async (options: any) => {
  const { sortBy, sortOrder, searchTerm, page, limit } = options;
  const skip = parseInt(limit) * parseInt(page) - parseInt(limit) || 0;
  const take = parseInt(limit) || 10;
  return await prisma.$transaction(async (tx) => {
    const result = await tx.post.findMany({
      skip,
      take,
      include: {
        author: true,
        category: true,
      },
      orderBy:
        sortBy && sortOrder
          ? {
              [sortBy]: sortOrder,
            }
          : { createdAt: "desc" },
      where: {
        OR: [
          {
            title: {
              contains: searchTerm,
              mode: "insensitive",
            },
          },
          {
            author: {
              name: {
                contains: searchTerm,
                mode: "insensitive",
              },
            },
          },
        ],
      },
    });
    const total = await tx.post.count();
    return { data: result, total };
  });
};

const updatePost = async (data: Post, id: number): Promise<Post | number> => {
  const result = await prisma.post.update({
    where: {
      id,
    },
    data,
  });
  return result;
};

const deletePost = async (id: number):Promise<Post> => {
  const result = await prisma.post.delete({
    where: {
      id,
    },
  });
  return result
};

export const postService = {
  createPost,
  getAllPost,
  updatePost,
  deletePost,
};
