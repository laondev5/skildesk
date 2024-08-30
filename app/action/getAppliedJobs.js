"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAppliedJob = async (applicantId) => {
  console.log(applicantId);
  try {
    const applicantJobs = await prisma.Applicant.findUnique({
      where: {
        id: applicantId,
      },
    });
    //console.log("my applicant", applicant);
    return applicantJobs;
  } catch (error) {
    console.log(error);
  }
};
