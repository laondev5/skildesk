import React from "react";
import { getJob } from "@/app/action/getJob";
import JobDetailPage from "@/components/JobDetailPage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const page = async ({ params }) => {
  const job = await getJob(params?.id);
  //console.log(job);
  return (
    <div>
      <Navbar />
      <JobDetailPage job={job} />
      <Footer />
    </div>
  );
};

export default page;
