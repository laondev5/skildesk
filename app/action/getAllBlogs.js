"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllBlogs = async () => {
  const blogs = await prisma.blogs.findMany();
  if (!blogs) {
    console.log("No blogs found");
  }
  return blogs;
};
