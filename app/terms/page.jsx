import React from "react";
import { getTerms } from "../action/getTerms";
import TermsAndCondition from "@/components/TermsAndCondition";
import Navbar from "@/components/Navbar";

const page = async () => {
  const terms = await getTerms();
  //console.log(terms);
  return (
    <div>
      <Navbar />
      <TermsAndCondition terms={terms} />
    </div>
  );
};

export default page;
