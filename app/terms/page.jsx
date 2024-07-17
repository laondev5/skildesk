import React from "react";
import { getTerms } from "../action/getTerms";
import TermsAndCondition from "@/components/TermsAndCondition";

const page = async () => {
  const terms = await getTerms();
  console.log(terms);
  return (
    <div>
      <TermsAndCondition terms={terms} />
    </div>
  );
};

export default page;
