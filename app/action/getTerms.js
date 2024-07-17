"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTerms = async () => {
  const terms = await prisma.Terms.findMany();
  if (!terms) {
    console.log("No ters found");
  }
  return terms;
};
