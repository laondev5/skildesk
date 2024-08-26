import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    const applicant = await prisma.Applicant.findMany();
    console.log(applicant);
    if (!applicant) {
      console.log("No job found");
      return NextResponse.notFound("No job found");
    }
    return applicant;
  } catch (error) {
    console.log(error);
    return NextResponse.error(error.message, 500);
  }
}
