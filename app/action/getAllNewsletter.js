"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllNewsletter = async () => {
  const newsletter = await prisma.Newsletter.findMany();
  if (!newsletter) {
    console.log("No job found");
  }
  return newsletter;
};
