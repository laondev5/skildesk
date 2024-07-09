import { getBlog } from "@/app/action/getBlog";
import ViewBlogDetails from "@/components/adminComponent/ViewBlogDetails";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import React from "react";

const page = async ({ searchParams }) => {
  const blog = await getBlog(searchParams.itemId);
  console.log(blog);
  return (
    <div>
      <Navbar />
      <Container>
        <ViewBlogDetails blog={blog} />
      </Container>
    </div>
  );
};

export default page;
