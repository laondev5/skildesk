import React from "react";
import { getUserData } from "@/app/action/getUserData";
import UserProfile from "@/components/UserProfile";

const page = async ({ searchParams }) => {
  //const userId = await getJob(searchParams.itemId);
  const userData = await getUserData(searchParams.itemId);
  console.log(userData);
  //return <div>page</div>
  return (
    <div className="w-[95%] my-4">
      <UserProfile userData={userData} />
    </div>
  );
};

export default page;
