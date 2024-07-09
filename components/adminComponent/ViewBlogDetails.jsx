import Image from "next/image";
import React from "react";

const ViewBlogDetails = ({ blog }) => {
  console.log(blog);
  return (
    <div className="w-full px-8">
      <div className="flex flex-col gap-4">
        <div className="w-full h-[20rem]">
          <Image
            src={blog.coverImage}
            alt={blog.title}
            width={100}
            height={100}
            className="object-cover w-[100%] h-[20rem]"
          />
        </div>
        <h1 className="text-3xl font-bold text-blue-950">{blog.title}</h1>
        <p className="text-sm font-light">{blog.author}</p>
        <p className="text-sm font-light">
          {new Date(blog.createdAt).toLocaleDateString()}
        </p>
        <div className="w-[95%] mx-auto flex flex-col">
          <div
            className="w-[90%] ProseMirror whitespace-pre-line "
            dangerouslySetInnerHTML={{ __html: blog?.description }}
          />
        </div>
      </div>
    </div>
  );
};

export default ViewBlogDetails;
