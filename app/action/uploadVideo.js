"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const uploadVideo = async (jobId, video) => {
  //const { status } = data;

  try {
    const jobStatus = await prisma.Jobs.update({
      where: { jobId: jobId },
      data: {
        video: video,
      },
    });
    //console.log(jobStatus);
    return jobStatus;
  } catch (error) {
    const message = `Error updating user`;
    return message;
  }
};
