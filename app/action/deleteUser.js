"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const deleteUser = async (id) => {
  console.log(id);
  try {
    const job = await prisma.User.delete({
      where: {
        id,
      },
    });
    return job;
  } catch (error) {
    console.log(error);
  }
};
