import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
//import { generateRandomIntegers } from "@/lib/AutogenCode";
import nodemailer from "nodemailer";

const prisma = new PrismaClient();

export async function POST(request) {
  const body = await request.json();
  const { data } = body;
  console.log(data);
  try {
    const user = await prisma.User.findUnique({
      where: { email: data.email },
    });

    //console.log(user);
    if (!user) {
      console.log("no user");
      throw new Error("No user with this email found");
    }
    let otpToken = Math.floor(Math.random() * 1000000).toString();
    //console.log(otpToken);

    const hashOtp = await bcrypt.hash(otpToken, 10);
    const hashedOtp = await prisma.User.update({
      where: { email: data.email },
      data: { forgetPasswordToken: hashOtp },
    });
    if (hashedOtp) {
      // console.log(hashedOtp);
      const subject = "Copy the code to complete you otp verification";
      const transporter = nodemailer.createTransport({
        // service: "zoho",
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: true,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASSWORD,
        },
        tls: {
          ciphers: "SSLv3",
        },
      });

      const mailOption = {
        from: process.env.MAIL_USER,
        to: data.email,
        subject: "Skildesk",
        html: `
        <h3>Verification Code</h3>
        <li> title: ${subject}</li>
        <li> message: ${otpToken}</li> 
        `,
      };
      await transporter.sendMail(mailOption);
    }

    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong please try again");
  }
}
