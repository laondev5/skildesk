import AdminViewJobs from "@/components/adminComponent/AdminViewJobs";
import React from "react";
import { getAllJobs } from "@/app/action/getAllJobs";
const page = async () => {
  const jobs = await getAllJobs();
  return (
    <div className="w-[90%]">
      <AdminViewJobs jobs={jobs} />
    </div>
  );
};

export default page;
