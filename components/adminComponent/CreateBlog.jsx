"use client";
import React, { useState } from "react";
import Tiptap from "../Tiptap";
import { Label } from "../ui/label";
import { Controller, useForm } from "react-hook-form";
// import { Input } from "postcss";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useSession } from "next-auth/react";
import { Toaster, toast } from "sonner";
import { InfinitySpin } from "react-loader-spinner";
import Image from "next/image";
import { date } from "zod";

const CreateBlog = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [des, setDes] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [author, setAuthor] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const handleContent = (input) => {
    setDes(input);
  };
  const { data: session } = useSession();
  const userData = session?.user;
  const userId = userData?.id;
  //console.log();

  const createTask = async (userId, data) => {
    try {
      const response = await fetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, data }),
      });

      const result = await response.json();
      if (response.ok) {
        // console.log("Blog created successfully:", result);
        toast.success("Blog created successfully");

        return result;
      } else {
        //console.error("Error creating blog:", result);
        toast.error("Failed to create Blog");

        return result;
      }
    } catch (error) {
      // console.error("Error creating blog:", error);
      toast.error("Failed to create Blog");
    }
  };
  const onSubmit = async (data) => {
    //console.log(data);
    setIsLoading(true);

    const rawImage = data?.file[0];
    // setImage(rawImage);
    // setTitle(data?.title);
    // setAuthor(data?.Author);

    //upload image
    const formData = new FormData();
    formData.append("file", rawImage);
    formData.append("upload_preset", "skilldesk"); // Replace with your Cloudinary preset
    // upload image
    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/laon/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        toast.error("Failed to upload image to cloud");
      }
      const imageData = await response.json();
      //console.log("Image uploaded:", imageData);
      const image = imageData?.secure_url;
      //console.log(image);
      const brandData = {
        ...data,
        file: image,
        description: des,
      };
      //console.log(brandData);
      createTask(userId, brandData);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  return (
    <>
      <Toaster position="bottom-right" expand={false} richColors />
      {isLoading && (
        <div className="absolute top-0 left-0 w-[100%] h-screen bg-gray-500/5">
          <div className="w-[100%] h-[100%] flex justify-center items-center">
            <div className="flex justify-center items-center w-[10rem] h-[10rem]  rounded-md ">
              <InfinitySpin
                height="100"
                width="100"
                radius="9"
                color="green"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
              />
            </div>
          </div>
        </div>
      )}
      <div className="flex w-full">
        <div className="flex flex-col justify-center w-full px-6">
          <div className="w-[100%] bg-blue-950 py-3 px-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              Create a new blog post
            </h2>
          </div>
          {/* Create Blog Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 justify-evenly gap-8 w-[100%]"
          >
            <div className=" my-2">
              <Controller
                name="title"
                control={control}
                defaultValue=""
                render={({ field: { onChange, onBlur, value } }) => (
                  <div>
                    <Label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Title
                    </Label>
                    <Input
                      type="text"
                      id="title"
                      name="title"
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      placeholder="Title"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                )}
              />
            </div>

            <div className=" my-2">
              <Controller
                name="Author"
                control={control}
                defaultValue=""
                render={({ field: { onChange, onBlur, value } }) => (
                  <div>
                    <Label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Author Name
                    </Label>

                    <Input
                      type="text"
                      id="Author"
                      name="Author"
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      placeholder="Author Name"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                )}
              />
            </div>
            <div className=" my-2">
              <Controller
                name="description"
                control={control}
                defaultValue=""
                render={({ field: { onChange, onBlur, value, name } }) => (
                  <div>
                    <Label
                      htmlFor="message"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Description
                    </Label>
                    <Tiptap
                      des={des}
                      description={name}
                      onChange={(newContent) => handleContent(newContent)}
                    />
                  </div>
                )}
              />
            </div>

            <div className="my-2">
              <Label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Upload cover image
              </Label>
              <div className="p-4 flex flex-col items-center gap-2 bg-violet-50 text-violet-500 rounded-lg hover:bg-violet-100 cursor-pointer">
                <input
                  type="file"
                  className="py-3 px-4"
                  {...register("file")}
                />
              </div>
            </div>
            <div className="my-2">
              <Button variant="default" size="lg">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateBlog;
