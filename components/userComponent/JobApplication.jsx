"use client";
import React, { useState } from "react";
import { Asterisk } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { InfinitySpin } from "react-loader-spinner";
import { useSession } from "next-auth/react";
import { Toaster, toast } from "sonner";
import { cloudinaryUpload } from "@/lib/CloudinaryUpload";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const JobApplication = ({
  jobData,
  userData,
  isApplicationFormOpen,
  setIsApplicationFormOpen,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const userId = userData?.id;
  const jobId = jobData?.id;
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const route = useRouter();
  const video = jobId;
  const createApplication = async (data) => {
    try {
      const response = await fetch("/api/applicant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      });

      const result = await response.json();
      if (response.ok) {
        //.log("Job application submitted  successfully", result);
        toast.success("Job application submitted  successfully");
        route.push(`/user/video/${jobId}`);
        return result;
      } else {
        //console.error("Error updating user:", result);
        toast.error("Failed to submit job application");
        setIsApplicationFormOpen(true);
        return result;
      }
    } catch (error) {
      // console.error("Error updating user:", error);
      toast.error("Failed to submit job application");
    }
  };

  const onSubmit = async (data) => {
    //console.log(data);
    setIsLoading(true);
    // get image
    const rawImage1 = data?.resume[0];
    const rawImage2 = data?.coverLetter[0];
    //console.log(rawImage1, rawImage2);
    try {
      const image1 = await cloudinaryUpload(rawImage1);
      const image2 = await cloudinaryUpload(rawImage2);
      //console.log(image);
      if (image1 && image2) {
        const brandData = {
          ...data,
          resume: image1,
          coverLetter: image2,
          status: "pending",
          userId: userId,
          jobId: jobId,
        };
        createApplication(brandData);
      }
      //console.log(brandData);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
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
      <h1 className="text-3xl font-bold mb-6">
        Apply for the Ad Designer Position
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* <div>
          <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
            Full Name{" "}
            <spa className="text-red-500 text-sm w-1 h-1">
              <Asterisk />
            </spa>
          </label>
          <input
            type="text"
            className="mt-1 block w-full border py-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div> */}
        <div className=" my-2">
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field: { onChange, onBlur, value } }) => (
              <div>
                <Label
                  className="flex items-center space-x-2 text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Full Name
                  <Asterisk className="text-red-500" />
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder="Brand name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            )}
          />
        </div>
        <div className=" my-2">
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field: { onChange, onBlur, value } }) => (
              <div>
                <Label
                  className="flex items-center space-x-2 text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email <Asterisk className="text-red-500" />
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder="Brand name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            )}
          />
        </div>
        <div className=" my-2">
          <Controller
            name="resume"
            control={control}
            defaultValue=""
            render={({ field: { onChange, onBlur, value } }) => (
              <div>
                <Label
                  className="flex items-center space-x-2 text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Resume <Asterisk className="text-red-500" />
                </Label>
                <div className="p-4 flex flex-col items-center gap-2 bg-violet-50 text-violet-500 rounded-lg hover:bg-violet-100 cursor-pointer">
                  <input
                    type="file"
                    className="py-3 px-4"
                    {...register("resume")}
                  />
                </div>
              </div>
            )}
          />
        </div>
        <div className=" my-2">
          <Controller
            name="coverLetter"
            control={control}
            defaultValue=""
            render={({ field: { onChange, onBlur, value } }) => (
              <div>
                <Label
                  className="flex items-center space-x-2 text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Cover Letter <Asterisk className="text-red-500 text-sm" />
                </Label>
                <div className="p-4 flex flex-col items-center gap-2 bg-violet-50 text-violet-500 rounded-lg hover:bg-violet-100 cursor-pointer">
                  <input
                    type="file"
                    className="py-3 px-4"
                    {...register("coverLetter")}
                  />
                </div>
              </div>
            )}
          />
        </div>
        <div className=" my-2">
          <Controller
            name="linkedin"
            control={control}
            defaultValue=""
            render={({ field: { onChange, onBlur, value } }) => (
              <div>
                <Label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Linkedin Profile
                </Label>
                <Input
                  type="url"
                  id="linkedin"
                  name="linkedin"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder="Linkedin Profile"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            )}
          />
        </div>
        <div className=" my-2">
          <Controller
            name="portfolio"
            control={control}
            defaultValue=""
            render={({ field: { onChange, onBlur, value } }) => (
              <div>
                <Label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Portfolio Website (Optional){" "}
                </Label>
                <Input
                  type="url"
                  id="portfolio"
                  name="portfolio"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder="Portfolio Website"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            )}
          />
        </div>
        <Button variant="default" size="lg">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default JobApplication;
