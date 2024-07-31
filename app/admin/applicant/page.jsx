import React from "react";
import { getAllApplicant } from "@/app/action/getAllApplicant";
import ApplicantTable from "@/components/adminComponent/ApplicantTable";

const page = async () => {
  const applicant = await getAllApplicant();
  return (
    <div>
      <ApplicantTable applicant={applicant} />
    </div>
  );
};

export default page;
