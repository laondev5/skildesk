import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
//import { generateRandomIntegers } from "@/lib/AutogenCode";
import nodemailer from "nodemailer";

const prisma = new PrismaClient();

export async function POST(request) {
  const body = await request.json();
  const { otpData } = body;
  console.log(otpData);
  try {
    const user = await prisma.User.findUnique({
      where: { id: otpData.id },
    });

    //console.log(user);
    if (!user) {
      //console.log("no user");
      throw new Error("No user with this email found");
    }
    // let otpToken = Math.floor(Math.random() * 1000000).toString();
    //console.log(otpToken);
    const isMatch = await bcrypt.compare(otpData.otp, user.forgetPasswordToken);
    if (!isMatch) {
      throw new Error("Incorrect OTP code please try again");
    } else {
      return NextResponse.json(user);
    }

    // const hashOtp = await bcrypt.hash(otpToken, 10);
    // const hashedOtp = await prisma.User.update({
    //   where: { email: data.email },
    //   data: { forgetPasswordToken: hashOtp },
    // });
    // if (hashedOtp) {
    //   console.log(hashedOtp);
    //   const subject = "Copy the code to complete you otp verification";

    // }

    // return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong please try again");
  }
}
