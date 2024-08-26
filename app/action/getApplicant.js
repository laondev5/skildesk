"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getApplicant = async (userId) => {
  console.log(userId);
  try {
    const applicant = await prisma.applicant.findMany({
      where: {
        userId: userId,
      },
    });
    //console.log("my applicant", applicant);
    return applicant;
  } catch (error) {
    console.log(error);
  }
};
