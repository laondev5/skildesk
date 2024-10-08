"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getApplicantExams = async (applicantId) => {
  //console.log(applicantId);
  try {
    const applicantExams = await prisma.Exam.findMany({
      where: {
        applicantId: applicantId,
      },
    });
    //console.log("my applicant", applicant);
    return applicantExams;
  } catch (error) {
    console.log(error);
  }
};
