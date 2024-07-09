import { getBlog } from "@/app/action/getBlog";
import ViewBlogDetails from "@/components/adminComponent/ViewBlogDetails";
import React from "react";

const page = async ({ searchParams }) => {
  const blog = await getBlog(searchParams.itemId);
  console.log(blog);
  return (
    <div>
      <ViewBlogDetails blog={blog} />
    </div>
  );
};

export default page;
