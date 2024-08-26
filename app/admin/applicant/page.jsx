import React from "react";
import { getAllApplicant } from "@/app/action/getAllApplicant";
import ApplicantTable from "@/components/adminComponent/ApplicantTable";
import AdminApplicant from "@/components/adminComponent/AdminApllicant";

const page = async () => {
  const applicants = await getAllApplicant();
  return (
    <div>
      {/* <ApplicantTable applicant={applicant} /> */}
      <AdminApplicant applicants={applicants} />
    </div>
  );
};

export default page;
