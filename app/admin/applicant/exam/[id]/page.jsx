import { RecruiterInterface } from "@/components/adminComponent/RecruiterExamsInterface";
import React from "react";
import { getApplicant } from "@/app/action/getApplicant";
const page = ({ params }) => {
  const applicantId = params.id;
  return (
    <div>
      <RecruiterInterface applicantId={applicantId} />
    </div>
  );
};

export default page;
