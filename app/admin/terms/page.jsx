import Terms from "@/components/adminComponent/Terms";
import React from "react";
import { getTerms } from "@/app/action/getTerms";

const page = async () => {
  const terms = await getTerms();
  console.log(terms);
  return (
    <div>
      <Terms terms={terms} />
    </div>
  );
};

export default page;
