import React from "react";
//import withAuthRoleRedirect from "@/lib/withAuthRoleRedirect";
import { getAllJobs } from "../action/getAllJobs";
import BrandDataTable from "@/components/brandComponents/BrandDataTable";

const page = async () => {
  const jobs = await getAllJobs();
  console.log(jobs);
  return (
    <div>
      <BrandDataTable jobs={jobs} />
    </div>
  );
};

export default page;
