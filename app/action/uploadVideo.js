"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const uploadVideo = async (jobId, video) => {
  // const { status } = data;
  //console.log(jobId, video);
  try {
    const applicantStatus = await prisma.Applicant.update({
      where: { id: jobId },
      data: {
        video: video,
      },
    });
    //console.log(applicantStatus);
    return applicantStatus;
  } catch (error) {
    const message = `Error updating user`;
    return message;
  }
};
