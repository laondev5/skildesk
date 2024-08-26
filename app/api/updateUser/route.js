import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request) {
  const body = await request.json();
  const { userId, data } = body;
  console.log(userId, data);

  const {
    brandName,
    file,
    industry,
    description,
    url,
    complete,
    country,
    phoneNumber,
    city,
    state,
    zip,
  } = data;

  try {
    const userProfile = await prisma.user.update({
      where: { id: userId },
      data: {
        // name: "",
        // email: "",
        // password: "",
        // status: "complete",
        // role: "VENDOR",
        status: "complete",
        brandName: brandName,
        website: url,
        description: description,
        image: file,
        industry: industry,
        completed: complete,
        country: country,
        phoneNumber: phoneNumber,
        city: city,
        state: state,
        zip: zip,
        // proveOfAddre: "",
        // businessReg: "",
        // idCard: "",
        // taxReg: "",
      },
    });

    if (!userProfile) {
      const message = "Error updating user: User profile not found.";
      console.log(message);
      //return res.status(404).json({ error: message });
    } else {
      const message = "User updated successfully";
      //console.log(message, userProfile);
      return NextResponse.json(userProfile);
    }
  } catch (error) {
    const message = "Error updating user";
    console.error(message, error);
    //return res.status(500).json({ error: message, details: error.message });
  } finally {
    await prisma.$disconnect();
  }
}
