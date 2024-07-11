import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request) {
  const body = await request.json();
  const { data } = body;
  console.log(data);
  try {
    const job = await prisma.applicant.create({
      data: {
        resume: data.image,
        jobId: data.jobId,
        userId: data.user,
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
