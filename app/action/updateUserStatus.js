"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const updateUserStatus = async (id, status) => {
  //const { status } = data;

  try {
    const jobStatus = await prisma.User.update({
      where: { id },
      data: {
        adminVerified: status,
      },
    });
    //console.log(jobStatus);
    return jobStatus;
  } catch (error) {
    const message = `Error updating user`;
    return message;
  }
};
