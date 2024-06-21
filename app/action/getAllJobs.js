"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllJobs = async () => {
  const jobs = await prisma.Jobs.findMany();
  if (!jobs) {
    console.log("No job found");
  }
  return jobs;
};
