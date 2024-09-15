import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request) {
  const body = await request.json();
  const { data } = body;
  console.log(data);
  //   try {
  //     const job = await prisma.Exam.create({
  //       data: {
  //         resume: data.resume,
  //         name: data.name,
  //         email: data.email,
  //         coverLetter: data.coverLetter,
  //         linkedin: data.linkedin,
  //         portfolio: data.portfolio,
  //         jobId: data.jobId,
  //         userId: data.userId,
  //         status: data.status,
  //         role: data.role,
  //         interview: "applied",
  //       },
  //     });

  //     console.log(job);
  //     if (!job) {
  //       return NextResponse.json({
  //         status: 400,
  //         message: "Failed to create job",
  //       });
  //     } else {
  //       return NextResponse.json({
  //         status: 200,
  //         message: "Job created successfully",
  //         job,
  //       });
  //     }
  //     //return job;
  //   } catch (error) {
  //     console.log(error);
  //   }
}
