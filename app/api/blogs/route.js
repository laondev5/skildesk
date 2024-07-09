import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request) {
  const body = await request.json();
  const { userId, data } = body;
  //console.log(userId, data);
  try {
    const job = await prisma.blogs.create({
      data: {
        title: data.title,
        description: data.description,
        coverImage: data.file,
        author: data.Author,
        userId: userId,
      },
    });
    //console.log(job);
    if (!job) {
      return NextResponse.json({
        status: 400,
        message: "Failed to create job",
      });
    } else {
      return NextResponse.json({
        status: 200,
        message: "Job created successfully",
      });
    }
    //return job;
  } catch (error) {
    console.log(error);
  }
}
