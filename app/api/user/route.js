import bcrypt from "bcrypt";
//import { PrismaClient } from "@prisma/client/";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
//import bcrypt from "bcrypt";
//import { generateRandomIntegers } from "@/lib/AutogenCode";
import nodemailer from "nodemailer";

const prisma = new PrismaClient();

export async function POST(request) {
  const body = await request.json();
  const {
    fullname,
    email,
    password,
    status,

    role,
  } = body;
  //console.log(email);

  if (!fullname || !email || !password) {
    //return new NextResponse("No name, email or password", { status: 400 });
    throw new Error("Please input your name, email or password");
  }

  const userExist = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (userExist) {
    throw new Error("user with this email already exist");
  }
  const otpToken = Math.floor(Math.random() * 1000000).toString();

  const hashPassword = await bcrypt.hash(password, 10);
  const brand = await prisma.user.create({
    data: {
      name: fullname,
      email: email,
      password: hashPassword,
      status: status,
      role: role,
    },
  });

  if (brand) {
    const hashOtp = await bcrypt.hash(otpToken, 10);
    const hashedOtp = await prisma.User.update({
      where: { email: brand.email },
      data: { forgetPasswordToken: hashOtp },
    });

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
      to: brand.email,
      subject: "Skildesk",
      html: `
        <h3>Verification Code</h3>
        <li> title: ${subject}</li>
        <li> message: ${otpToken}</li> 
        `,
    };
    await transporter.sendMail(mailOption);
    return NextResponse.json(hashedOtp);
  }
}
