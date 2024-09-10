import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request) {
  const body = await request.json();
  const { userId, data } = body;
  console.log(userId, data);
  try {
    const job = await prisma.Jobs.create({
      data: {
        title: data.title,
        brandName: data.brandName,
        Description: data.description,
        payFrom: data.payFrom,
        payTo: data.payTo,
        experienceLevels: data.experienceLevels,
        jobCategories: data.jobCategories,
        jobType: data.jobType,
        location: data.location,
        industry: data.industry,
        coverImage: data.file,
        userId: userId,
        webUrl: data.webUrl,
        status: data.status,
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
