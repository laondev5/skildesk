import { getAllInterview } from "@/app/action/getAllInterviews";
import AdminInterview from "@/components/adminComponent/AdminInterview";
import React from "react";

const page = async () => {
  const interviews = await getAllInterview();
  return (
    <div className="w-[90%]">
      <AdminInterview interviews={interviews} />
    </div>
  );
};

export default page;
