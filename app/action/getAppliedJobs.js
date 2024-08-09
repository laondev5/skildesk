"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getApplicant = async (applicantId) => {
  console.log(applicantId);
  try {
    const applicantJobs = await prisma.jobs.findMany({
      where: {
        applicantId: applicantId,
      },
    });
    console.log("my applicant", applicant);
    return applicantJobs;
  } catch (error) {
    console.log(error);
  }
};
