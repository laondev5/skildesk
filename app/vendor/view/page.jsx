import { getJob } from "@/app/action/getJob";
import ViewJob from "@/components/brandComponents/ViewJob";
import React from "react";
import { getUserData } from "@/app/action/getUserData";

const page = async ({ searchParams }) => {
  //console.log(searchParams.itemId);
  const jobData = await getJob(searchParams.itemId);
  const userData = await getUserData(jobData?.userId);
  console.log(userData);
  return (
    <div className="w-[95%] h-[600px] mx-auto">
      <ViewJob jobData={jobData} userData={userData} />
    </div>
  );
};

export default page;
