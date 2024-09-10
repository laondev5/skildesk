import ViewBlog from "@/components/adminComponent/ViewBlog";
import React from "react";
import { getAllBlogs } from "@/app/action/getAllBlogs";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import UserViewBlogDetails from "@/components/UserViewBlogDetails";

const page = async () => {
  const blogs = await getAllBlogs();
  //console.log(blogs);
  return (
    <div>
      <Navbar />
      <Container>
        <UserViewBlogDetails blogPosts={blogs} />
      </Container>
    </div>
  );
};

export default page;
