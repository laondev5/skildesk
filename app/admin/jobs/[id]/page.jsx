import ViewJob from "@/components/brandComponents/ViewJob";
import React from "react";

const page = ({ params }) => {
  console.log(params?.id);
  return <div>{params.id}</div>;
};

export default page;
