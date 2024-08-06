import React from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const page = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    console.log("no user session found");
  } else {
    console.log(session);
  }
  return <div>page</div>;
};

export default page;
