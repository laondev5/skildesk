"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";
//import { useRouter } from "next/navigation";

const UserViewBlogDetails = ({ blogs }) => {
  const { data: session } = useSession();
  //const Router = useRouter();
  //console.log(blogs);
  //const createdAt = new Date(blogs?.createdAt);
  // console.log(blogs?.createdAt);
  //   const formattedDate = new Intl.DateTimeFormat("en-US", {
  //     year: "numeric",
  //     month: "long",
  //     day: "numeric",
  //     hour: "2-digit",
  //     minute: "2-digit",
  //   }).format(blogs?.createdAt);
  //   console.log(formattedDate);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly gap-8 w-[100%] px-8">
      {blogs.map((blog, i) => (
        <Link
          key={i}
          href={{
            pathname: "/viewBlogDetails",
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

export default UserViewBlogDetails;
