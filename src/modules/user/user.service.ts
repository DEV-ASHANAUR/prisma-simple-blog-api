import { PrismaClient, Profile, User } from "@prisma/client";

const prisma = new PrismaClient();

const insertUser = async (data: User): Promise<User> => {
  const result = await prisma.user.create({
    data,
  });
  return result;
};

const getAllUser = async (): Promise<User[]> => {
  const result = await prisma.user.findMany({
    include:{
      profile:true
    }
  });
  return result;
};

const getSingleUser = async (id: number): Promise<User | null> => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
    include:{
      profile:true
    }
  });
  return result;
};

const profileInsertOrUpdate = async (
  data: Profile
): Promise<Profile | null> => {
  const isExist = await prisma.profile.findUnique({
    where: {
      userId: data.userId,
    },
  });

  if (isExist) {
    const result = await prisma.profile.update({
      where: {
        userId: data.userId,
      },
      data: {
        bio: data.bio,
      },
    });
    return result;
  }

  const result = await prisma.profile.create({
    data: data,
  });
  return result;
};

export const UserService = {
  insertUser,
  getAllUser,
  getSingleUser,
  profileInsertOrUpdate,
};
