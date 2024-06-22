"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllUsers = async () => {
  const user = await prisma.User.findMany();
  if (!user) {
    console.log("No job found");
  }
  return user;
};
