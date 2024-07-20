import ImageUpload from "@/components/userComponent/ApplyJob";
import React from "react";

const page = ({ params }) => {
  return (
    <div>
      <ImageUpload jobId={params.jobId} />
    </div>
  );
};

export default page;
