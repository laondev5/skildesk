import AdminViewApplicant from "@/components/adminComponent/AdminViewApplicant";
import React from "react";
//import { getApplicant } from "@/app/action/getApplicant";
import { getAppliedJob } from "@/app/action/getAppliedJobs";

const page = async ({ params }) => {
  const applicantDetail = await getAppliedJob(params.id);
  console.log(applicantDetail);
  return (
    <div>
      <AdminViewApplicant applicantDetail={applicantDetail} />
    </div>
  );
};

export default page;
