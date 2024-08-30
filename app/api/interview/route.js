import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const prisma = new PrismaClient();

export async function POST(request) {
  const body = await request.json();
  const { interviewData } = body;
  // console.log(interviewData);
  try {
    const job = await prisma.Interview.create({
      data: {
        name: interviewData.name,
        email: interviewData.email,
        date: interviewData.date,
        time: interviewData.time,
        role: interviewData.role,
        applicantId: interviewData.applicantId,
        jobId: interviewData.jobId,
        userId: interviewData.userId,
        status: interviewData.status,
        result: interviewData.result,
        interviewType: interviewData.interviewType,
      },
    });

    //console.log(job);
    if (!job) {
      return NextResponse.json({
        status: 400,
        message: "Failed to create interview",
      });
    } else {
      const subject =
        "An interview has been scheduled with you please check the information";
      const message = `a ${interviewData.interviewType} interview has been scheduled for ${interviewData.date} at ${interviewData.time} for the role of ${interviewData.role}`;
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
        to: interviewData.email,
        subject: "Skildesk",
        html: `
        <div style="width:400px; border:solid 1px gray; ">
        <div style="background:blue; display:flex; justify-content: center; align-items:center; ">
        <h3 style=" font-size: 20px; color:white; text-align:center;">Interview Scheduled for</h3>
        </div>
        <h4 style="font-size:18px text-align:center">${subject}</h4>
        <div style="padding:10px; text-align:center">${message}</div> 
        </div>
        `,
      };
      await transporter.sendMail(mailOption);

      return NextResponse.json({
        status: 200,
        message: "Job created successfully",
        job,
      });
    }
    //return job;
  } catch (error) {
    console.log(error);
  }
}
