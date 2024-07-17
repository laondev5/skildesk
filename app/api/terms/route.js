import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request) {
  const body = await request.json();
  const { userId, data } = body;
  //console.log(data);
  try {
    const term = await prisma.Terms.create({
      data: {
        content: data.description,
        userId: data.userId,
      },
    });
    //console.log(job);
    if (!term) {
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
