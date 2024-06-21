"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const updateJobStatus = async (id, status) => {
  //const { status } = data;

  try {
    const jobStatus = await prisma.Jobs.update({
      where: { id },
      data: {
        status: status,
      },
    });
    //console.log(jobStatus);
    return jobStatus;
  } catch (error) {
    const message = `Error updating user`;
    return message;
  }
};
