"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllApplicant = async () => {
  const applicant = await prisma.Applicant.findMany();
  if (!applicant) {
    console.log("No job found");
  }
  return applicant;
};
