import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request) {
  const body = await request.json();
  const { data } = body;
  console.log(data);
  try {
    const exams = await prisma.Exam.create({
      data: {
        title: data.title,
        steps: data.steps,
        applicantId: data.applicantId,
      },
    });

    console.log(exams);
    if (!exams) {
      return NextResponse.json({
        status: 400,
        message: "Failed to create exam",
      });
    } else {
      return NextResponse.json({
        status: 200,
        message: "Exam created successfully",
        exams,
      });
    }
    //return job;
  } catch (error) {
    console.log(error);
  }
}
