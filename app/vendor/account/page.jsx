import React from "react";
import { getUserData } from "@/app/action/getUserData";
import UserProfile from "@/components/UserProfile";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const page = async ({ searchParams }) => {
  //const userId = await getJob(searchParams.itemId);
  const userData = await getUserData(searchParams.itemId);
  const session = await getServerSession(authOptions);
  console.log(userData);
  //return <div>page</div>
  return (
    <div className="w-[95%] my-4">
      <UserProfile userData={userData} session={session} />
    </div>
  );
};

export default page;
