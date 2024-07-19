import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ImageUpload from "@/components/userComponent/ApplyJob";
import JobHome from "@/components/userComponent/JobHome";
import { getJob } from "@/app/action/getJob";
import { getUserData } from "@/app/action/getUserData";

const page = async ({ params }) => {
  const session = await getServerSession(authOptions);
  //console.log(params);
  const jobData = await getJob(params.jobId);
  const userData = await getUserData(session?.user?.id);
  console.log(jobData);
  console.log(userData);

  return (
    <div>
      <JobHome jobData={jobData} userData={userData} />
      {/* <ImageUpload jobId={params.jobId} user={session?.user?.id} />{" "} */}
    </div>
  );
};

export default page;
