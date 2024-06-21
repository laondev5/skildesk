"use client";
import React, { useRef, useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "../ui/label";
import { UploadCloud } from "lucide-react";
import { Button } from "../ui/button";
import { Industries, JobType, Countries } from "@/lib/parameters";
import { InfinitySpin } from "react-loader-spinner";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { updateUser } from "@/app/action/updateAction";
import { ToastAction } from "@/components/ui/toast";

import { Toaster, toast } from "sonner";

const BrandProfilForm = () => {
  const { data: session } = useSession();
  const userData = session?.user;
  const [isLoading, setIsLoading] = useState(false);
  const Router = useRouter();
  const userId = userData?.id;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // async function uploadData(userId, data) {
  //   try {
  //     const res = await updateUser(userId, data);
  //     if (res) {
  //       toast.success("Registration completed  successfully");
  //       Router.push("/vendor");
  //     }
  //   } catch (error) {
  //     toast.error("Failed to complete registration");
  //   }
  // }
  const updateUser = async (userId, data) => {
    try {
      const response = await fetch("/api/updateUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, data }),
      });

      const result = await response.json();
      if (response.ok) {
        console.log("User updated successfully:", result);
        toast.success("Registration completed  successfully");
        return result;
      } else {
        console.error("Error updating user:", result);
        toast.error("Failed to complete registration");
        return result;
      }
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error("Failed to complete registration");
    }
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    // get image
    const rawImage = data?.file[0];
    //console.log(rawImage);

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
      const brandData = { ...data, file: image };
      //console.log(brandData);
      updateUser(userId, brandData);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      const message = "An error occurred while submitting the form.";
      console.log(message);
    }
  };

  return (
    <div className="w-[100%] relative">
      <Toaster position="bottom-right" expand={false} richColors />
      {isLoading && (
        <div className="absolute top-0 left-0 w-full h-screen bg-gray-500/5">
          <div className="w-full h-full flex justify-center items-center">
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
      <h1 className="text-3xl text-center text-blue-950 font-bold py-8">
        Complete your profile
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 justify-evenly gap-8 w-[100%]"
      >
        <div className=" my-2">
          <Label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Brand name
          </Label>
          <input
            {...register("brandName", { required: true })}
            type="text"
            id="brandName"
            placeholder="Brand name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.brandName && (
            <span className="text-red-400 font-normal">
              BrandName is required
            </span>
          )}
        </div>

        <div className=" my-2">
          <Label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Website Url
          </Label>
          <input
            {...register("url")}
            type="text"
            id="url"
            placeholder="www.brand.com"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="hidden my-2">
          <Label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            completed
          </Label>
          <input
            {...register("complete")}
            type="text"
            value="completed"
            id="complete"
            placeholder="www.brand.com"
            className=" hidden shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className=" my-2">
          <Label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Select Industry
          </Label>
          <select
            {...register("industry", { required: true })}
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option value="value1">select an option</option>
            {Industries.map((ind, i) => (
              <option
                // onChange={(e) => handleChange(e)}
                value={ind}
                key={i}
              >
                {ind}
              </option>
            ))}
          </select>
          {errors.industry && (
            <span className="text-red-400 font-normal">
              Industry is required
            </span>
          )}
        </div>

        <div className=" my-2">
          <Label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Select Country
          </Label>
          <select
            {...register("country", { required: true })}
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option value="value1">select an option</option>
            {Countries.map((ind, i) => (
              <option
                // onChange={(e) => handleChange(e)}
                value={ind}
                key={i}
              >
                {ind}
              </option>
            ))}
          </select>
          {errors.country && (
            <span className="text-red-400 font-normal">
              country is required
            </span>
          )}
        </div>
        <div className=" my-2">
          <Label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            State
          </Label>
          <input
            {...register("state", { required: true })}
            type="text"
            id="state"
            placeholder="state"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.state && (
            <span className="text-red-400 font-normal">state is required</span>
          )}
        </div>
        <div className=" my-2">
          <Label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            City
          </Label>
          <input
            {...register("city", { required: true })}
            type="text"
            id="city"
            placeholder=" City"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.city && (
            <span className="text-red-400 font-normal">City is required</span>
          )}
        </div>
        <div className=" my-2">
          <Label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Address
          </Label>
          <input
            {...register("address", { required: true })}
            type="text"
            id="address"
            placeholder="address"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.address && (
            <span className="text-red-400 font-normal">
              Address is required
            </span>
          )}
        </div>
        <div className=" my-2">
          <Label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Zip code
          </Label>
          <input
            {...register("zip", { required: true })}
            type="text"
            id="zip"
            placeholder="zip code"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.zip && (
            <span className="text-red-400 font-normal">
              zip code is required
            </span>
          )}
        </div>
        <div className=" my-2">
          <Label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Phone Number
          </Label>
          <input
            {...register("phoneNumber", { required: true })}
            type="tel"
            id="phoneNumber"
            // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="Phone Number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.address && (
            <span className="text-red-400 font-normal">
              Phone Number is required
            </span>
          )}
        </div>
        <div className=" my-2">
          <Label
            htmlFor="message"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Description
          </Label>
          <textarea
            {...register("description", { required: true })}
            // onChange={(e) => handleChange(e)}

            placeholder="Description"
            id="description"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.description && (
            <span className="text-red-400 font-normal">
              Description is required
            </span>
          )}
        </div>

        <div className="my-2">
          <input
            {...register("file")}
            // onChange={(e) => handleChange(e)}
            type="file"
          />
          {errors.file && (
            <span className="text-red-400 font-normal">Logo is required</span>
          )}
        </div>

        <div className="my-2">
          <Button type="submit" variant="main" size="lg">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BrandProfilForm;
