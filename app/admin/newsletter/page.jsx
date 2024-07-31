import React from "react";
import { getAllNewsletter } from "@/app/action/getAllNewsletter";
// import NewsLetter from "@/components/NewsLetter";
// import AdminNewsletter from "@components/adminComponent/AdminNewsletter";
import AdminNewsletter from "@/components/adminComponent/AdminNewsletter";

const page = async () => {
  const newsletter = await getAllNewsletter();
  return (
    <div className="w-full py-4 px-8">
      <AdminNewsletter newsletter={newsletter} />
    </div>
  );
};

export default page;