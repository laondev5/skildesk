import ViewBlog from "@/components/adminComponent/ViewBlog";
import React from "react";
import { getAllBlogs } from "@/app/action/getAllBlogs";

const page = async () => {
  const blogs = await getAllBlogs();
  console.log(blogs);
  return (
    <div>
      <ViewBlog blogs={blogs} />
    </div>
  );
};

export default page;
