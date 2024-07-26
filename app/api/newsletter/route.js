import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const prisma = new PrismaClient();

export async function POST(request) {
  const body = await request.json();
  const { data } = body;
  //console.log(data);
  try {
    const term = await prisma.Newsletter.create({
      data: {
        email: data.email,
      },
    });
    //console.log(job);
    if (!term) {
      throw new Error("Sorry something went wrong please try again");
    } else {
      const subject = "Thank you";
      const message = "Thank you for subscribing to our newsletter";
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
        <li> message: ${message}</li> 
        `,
      };
      await transporter.sendMail(mailOption);
      return NextResponse.json(term);
    }
    //return job;
  } catch (error) {
    console.log(error);
  }
}
