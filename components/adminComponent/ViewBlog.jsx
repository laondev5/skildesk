"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";
//import { useRouter } from "next/navigation";

const ViewBlog = ({ blogs }) => {
  const { data: session } = useSession();
  // console.log(blogs);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly gap-8 w-[100%] px-8">
      {blogs.map((blog, i) => (
        <Link
          key={i}
          href={{
            pathname: "/admin/viewBlogDetails",
            query: {
              itemId: blog.id,
            },
          }}
        >
          <div className="w-[100%] bg-white rounded-md hover:shadow-md p-4">
            <div className="flex justify-center items-center w-fill">
              <Image
                src={blog.coverImage}
                alt={blog.title}
                width={100}
                height={100}
                className="w-[100%] rounded-md"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-bold">{blog.title}</h3>
              <div
                className="w-[90%] ProseMirror whitespace-pre-line line-clamp-1 "
                dangerouslySetInnerHTML={{ __html: blog.description }}
              />
              <div className="flex w-[100%] justify-between items-center">
                <p className="text-gray-600">{blog.author}</p>
                <p className="text-sm font-light">
                  {new Date(blog.createdAt).toLocaleDateString()}
                </p>
              </div>
              {/* <p className="text-gray-600">{blog.author}</p> */}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ViewBlog;
