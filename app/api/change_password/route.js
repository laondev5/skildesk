import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(request) {
  const body = await request.json();
  const { passwordData } = body;
  //console.log(passwordData);
  try {
    const user = await prisma.User.findUnique({
      where: { id: passwordData.userId },
    });

    //console.log(job);
    if (!user) {
      throw new Error("No user with this email found");
    }
    const isMatch = await bcrypt.compare(
      passwordData.oldPassword,
      user.password
    );
    if (!isMatch) {
      throw new Error("Incorrect password please try again");
    }
    const hashPassword = await bcrypt.hash(passwordData.newPassword, 10);
    const hashedPassword = await prisma.User.update({
      where: { id: passwordData.userId },
      data: { password: hashPassword },
    });
    if (hashedPassword) {
      console.log(hashedPassword);
      return NextResponse.json({
        status: 200,
        message: "Password updated successfully",
      });
    }
    //return job;
  } catch (error) {
    throw new Error("Something went wrong please try again");
  }
}
