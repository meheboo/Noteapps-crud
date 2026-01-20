import { prisma } from "../config/prisma";

export const createUser = (email: string, password: string) => {
  return prisma.user.create({
    data: {
      email,
      password
    }
  });
};

export const findUserByEmail = (email: string) => {
  return prisma.user.findUnique({
    where: { email },
    select: {
      id: true,
      email: true,
      password: true
    }
  });
};
