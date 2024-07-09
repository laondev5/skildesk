"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getBlog = async (id) => {
  console.log(id);
  try {
    const blog = await prisma.blogs.findUnique({
      where: {
        id: id,
      },
    });
    //console.log(jobs);
    return blog;
  } catch (error) {
    console.log(error);
  }
};
