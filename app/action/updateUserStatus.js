"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const updateUserStatus = async (id, status) => {
  //const { status } = data;
  console.log(status, id);
  try {
    const userStatus = await prisma.User.update({
      where: { id },
      data: {
        adminVerified: status,
      },
    });
    // console.log(userStatus);
    return userStatus;
  } catch (error) {
    const message = `Error updating user`;
    return message;
  }
};
