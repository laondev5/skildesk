"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllInterview = async () => {
  const interview = await prisma.Interview.findMany();
  if (!interview) {
    console.log("No job found");
  }
  return interview;
};
