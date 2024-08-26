"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const updateUser = async (userId, data) => {
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
  console.log(userId);
  try {
    const userProfile = await prisma.user.update({
      where: { id: userId },
      data: {
        status: "complete",
        brandName: brandName,
        website: url,
        description: description,
        image: file,
        industry: industry,
        complete: complete,
        country: country,
        phoneNumber: phoneNumber,
        city: city,
        state: state,
        zip: zip,
      },
    });
    if (!userProfile) {
      const message = `Error updating user`;
      //console.log(message);
      return message;
    } else {
      const message = `User updated successfully`;
      // console.log(message, userProfile);
      return userProfile;
    }
  } catch (error) {
    const message = `Error updating user`;
    return message;
  }
};
