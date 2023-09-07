import { Category, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const createCategory = async (payload: Category): Promise<Category> => {
  const result = await prisma.category.create({ data: payload });
  return result;
};

export const CategoryService = {
  createCategory,
};
