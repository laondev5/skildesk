import bcrypt from "bcrypt";
//import { PrismaClient } from "@prisma/client/";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

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
  console.log(email);

  if (!fullname || !email || !password) {
    return new NextResponse("No name, email or password", { status: 400 });
  }

  const userExist = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (userExist) {
    return new NextResponse("User with this email already exist", {
      status: 400,
    });
  }

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

  return NextResponse.json(brand);
}
