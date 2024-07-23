import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
//import { generateRandomIntegers } from "@/lib/AutogenCode";
import nodemailer from "nodemailer";

const prisma = new PrismaClient();

export async function POST(request) {
  const body = await request.json();
  const { passwordData } = body;
  console.log(passwordData);
  try {
    const user = await prisma.User.findUnique({
      where: { id: passwordData.id },
    });

    //console.log(user);
    if (!user) {
      console.log("no user");
      throw new Error("No user found");
    }
    // let otpToken = Math.floor(Math.random() * 1000000).toString();
    //console.log(otpToken);

    const hashPassword = await bcrypt.hash(passwordData.password, 10);
    const hashedPassword = await prisma.User.update({
      where: { id: passwordData.id },
      data: { password: hashPassword },
    });
    if (!hashedPassword) {
      throw new Error("Password could not be changed please try again");
    }
    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong please try again");
  }
}
