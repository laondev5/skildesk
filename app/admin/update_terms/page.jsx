import UpdateTerms from "@/components/adminComponent/UpdateTerms";
import React from "react";

const page = ({ searchParams }) => {
  return (
    <div>
      <UpdateTerms id={searchParams.itemId} />
    </div>
  );
};

export default page;
